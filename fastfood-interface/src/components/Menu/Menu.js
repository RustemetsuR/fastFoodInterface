import React from 'react';
import FoodFromMenu from '../FoodFromMenu/FoodFromMenu';

const Menu = props => {
    return props.menu.map(food => {
        return (
            <FoodFromMenu
                key={food.id}
                name={food.name}
                price={food.price}
                add={() => props.add(food.id)}/>
        )
    })
}

export default Menu;