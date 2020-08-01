import React from 'react';
import './App.css';

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
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
