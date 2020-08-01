import React from 'react';
import Order from '../Order/Order'

const AllOrders = props => {
    return props.orders.map(order => {
        if (order.count !== 0) {
            return (
                <Order
                    key={order.id}
                    name={order.name}
                    price={order.currentPrice}
                    amount={order.count}
                    remove={() => props.remove(order.id)}
                    removeAll={() => props.removeAll(order.id)} />
            )
        }

    })
}

export default AllOrders;