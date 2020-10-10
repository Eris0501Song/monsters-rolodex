import React from 'react';
import './card-list.styles.css';
import  { Card } from '../card/card.component';

// const: You can change the properties of a constant object; But you can NOT reassign a constant object
export const CardList = props => (
     <div className='card-list'>
        {// Map被称为arrey methods: 作用是让之后写的function可以在class中每一个element上被实践. 并create出一个new arrey based on our exsiting arrey
          props.monsters.map(
                monster => (
                    <Card key={monster.id} monster={monster} />
                )
            )
        }
    </div>
);