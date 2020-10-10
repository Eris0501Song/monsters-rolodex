import React from 'react';

import './card.styles.css';

// Card = (props): 意思是一个叫card的function, 里面的parameter叫props
//=>: 意思是return()
export const Card = (props) => (
    <div className='card-container'>
        <img 
            alt="monster" //alt: 相当于图片注释
            src={ `https://robohash.org/${props.monster.id}?set=set2&size=300x300` } 
        />
        {/* {}: The curly braces are a special syntax to let the JSX parser know that it needs to interpret the contents in between them as JavaScript instead of a string. */}
        <h2> { props.monster.name } </h2>  
        <p> { props.monster.email } </p>

    </div>

)