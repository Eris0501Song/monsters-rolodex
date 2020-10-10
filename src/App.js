import React, { Component } from 'react'; 
import {CardList} from './components/card-list/card-list.component';
import {Searchbox} from './components/card-list/search-box/search-box.component';
import './App.css';


// component is a property of react.
// class App extends Component: 作用是让react知道我们要在class上使用react中component这个property
// inheritance: component为parent class, app为child class
class App extends Component{
  constructor(){
    // super() helps call react.component's comstructor()(super是在callcomponent内的结构)
    super();
    // this.state会被pass down成为component的props, 如果state被改变, rendor fucntion就会被run again
    this.state = {
      // 🚥string = "Hello Eris"
      monsters: [],
      //设置searchfield空string是为了存储userinput的内容,方便后续和db中的monster比对得到结果(在之后会用setstate对searchField重新赋值)
      searchField: ''
    };

        {/*  对class内对象使用function时可写为this.functioname; 
      但要注意如果是自建function,写法会有不同,因为scope不同; 但自建function body里存在this时才用bind;
      或者可以把自建function写为arrow function 就不用bind; arrow function会自动搜寻被定义的context */}
        // ⚠️⚠️⚠️⚠️⚠️最好function都写为arrow function, 避免要写bind或者出现undefined
  }

  // componentDidMount(): invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
  //fetch(): Request represents a HTTP request to be performed via fetch(). Typically a Request doesn't need to be constructed manually, as it's instantiated internally when fetch() is called.
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())   //把fetch出来的内容定义为response然后将response转换为json格式
    .then(users => this.setState({monsters: users}));
  }

  // ⚠️⚠️⚠️⚠️⚠️大括号{}里的内容都是JavaScript expression
  // Anonymous functions: () =>  An anonymous function is a function that was declared without any named identifier to refer to it. As such, an anonymous function is usually not accessible after its initial creation.
  //filter(): 通过对arrey中所有的对象执行一次filter()中设置的function, 筛选出符合条件的对象形成一个新arrey而不是modify原来的array
  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return(
    <div className='App'>
      {/* ⚠️⚠️⚠️⚠️onChange作用是input内容一发生改变就执行onChange内的内容; e代表event; e.target.value代表被input的内容, 用于提取存储*/}
    <h1> Monsters Rolodex</h1>
    <Searchbox
      placeholder = 'search monsters'
      handleChange = { e => this.setState({ searchField: e.target.value })} 
    />
    <CardList monsters={filterMonsters} /> 
        {/* 🚥 <p>f
          {this.state.string}
              </p>
        🍦🍦🍦🍦🍦这里使用setState是因为jsx是one-way data flow, 不能写this.state.string来试图改变之前的state, 
        所以只能用setstate 来定义一个新值,然后让render() rerun. very important!!!
        <button onClick={ () => this.setState({ string: 'Hello Kelun' })}>Change Text</button> */}
    </div>
    )
  };
}


export default App;
