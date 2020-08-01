import React from 'react';
import './Order.css';

const Order = props => {
    return (
        <div className="order">
            <h3 className='name-order'>{props.name}</h3>
            <p className='price-order'>Price: {props.price} kgs</p>
            <p className='amount-order'>{props.amount}x</p>
            <button className='btn' onClick={props.remove}>-1</button>
            <button className='btn' onClick={props.removeAll}>Remove</button>
        </div>
    )
}

export default Order;