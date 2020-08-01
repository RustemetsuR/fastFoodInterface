import React from 'react';
import './TotalPrice.css';

const TotalPrice = props => {
    return (
        <div className="total-price">
            <h3>Total Price: {props.totalPrice} KGS</h3>
        </div>
    )
}

export default TotalPrice;