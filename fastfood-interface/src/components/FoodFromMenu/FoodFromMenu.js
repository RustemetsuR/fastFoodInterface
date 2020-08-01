import React from 'react';
import './FoodFromMenu.css';

const FoodFromMenu = props => {
    return (
        <div className="food" onClick={props.add}>
            <h3 className='name'>{props.name}</h3>
            <p className='price'>Price: {props.price} kgs</p>
        </div>
    )
}

export default FoodFromMenu;