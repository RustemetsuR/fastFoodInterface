import React from 'react';
import './App.css';
import AllOrders from '../components/AllOrders/AllOrders';
import Menu from '../components/Menu/Menu';
import TotalPrice from '../components/TotalPrice/TotalPrice';


const App = () => {
  const [menu, setMenu] = useState([
    { name: 'Hamburger', price: 80, currentPrice: 80, count: 0, id: 'menu-1' },
    { name: 'Cheeseburger', price: 90, currentPrice: 90,count: 0, id: 'menu-2' },
    { name: 'Fries', price: 45, currentPrice: 45,count: 0, id: 'menu-3' },
    { name: 'Coffee', price: 70, currentPrice: 70,count: 0, id: 'menu-4' },
    { name: 'Tea', price: 50, currentPrice: 50,count: 0, id: 'menu-5' },
    { name: 'Cola', price: 40, currentPrice: 40,count: 0, id: 'menu-6' },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);

  const addFoodToTheOrders = id => {
    const index = menu.findIndex(food => food.id === id);
    let menuCopy = [...menu];
    let totalPriceCopy = totalPrice;

    menuCopy[index].count++;
    menuCopy[index].currentPrice = menuCopy[index].price * menuCopy[index].count;
    totalPriceCopy= totalPriceCopy + menuCopy[index].price;


    setMenu(menuCopy);
    setTotalPrice(totalPriceCopy);
  }

  const removeOneFood = id =>{
    const index = menu.findIndex(food => food.id === id);
    let menuCopy = [...menu];
    let totalPriceCopy = totalPrice;

    menuCopy[index].count--;
    menuCopy[index].currentPrice = menuCopy[index].currentPrice - menuCopy[index].price;
    totalPriceCopy= totalPriceCopy - menuCopy[index].price;

    setMenu(menuCopy);
    setTotalPrice(totalPriceCopy);
  }

  const removeAllFoodFromOneKind = id =>{
    const index = menu.findIndex(food => food.id === id);
    let menuCopy = [...menu];
    let totalPriceCopy = totalPrice;

    totalPriceCopy= totalPriceCopy - menuCopy[index].currentPrice;

    menuCopy[index].count = 0;
    menuCopy[index].currentPrice = menuCopy[index].price;

    setMenu(menuCopy);
    setTotalPrice(totalPriceCopy);
  }
  return (
    <div className="App">
      <div className="interface">
        <div className="boxes order-box">
          <h2>Orders</h2>
          <div className="orders">
            <AllOrders orders={menu} remove={removeOneFood} removeAll={removeAllFoodFromOneKind}/>
          </div>
          <TotalPrice totalPrice={totalPrice} />
        </div>
        <div className="boxes menu-box">
          <h2>Menu</h2>
          <Menu add={addFoodToTheOrders} menu={menu} />
        </div>
      </div>
    </div>
  );
}

export default App;
