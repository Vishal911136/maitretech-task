import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom'
import Menu from "./pages/Menu"
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import data from "./data/data";
import {  useState } from "react";

function App() {
  const products = data;
  
  const [cartItems, setCartItems] = useState([]);
  
  const handleAddProduct = (product) =>{
    console.log(cartItems);
    
    const productExist =  cartItems.find((item) => item.id === product.id);
    if(productExist){
      setCartItems(cartItems.map((item) => 
        item.id === product.id? {...product, quantity: productExist.quantity + 1}: item)
        );
        console.log("if statemen")
    }
     else{
          setCartItems([...cartItems, {...product, quantity: 1}]);
          console.log("else statement")
    }
  }

  return (
    <div className="App">
      <Header products={products}/>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu products={products} cartItems={cartItems} handleAddProduct= {handleAddProduct}/>}></Route>
        <Route path="/checkout" element={<Checkout/>} cartItems={cartItems}></Route>
      </Routes>
    </div>
  );
}

export default App;
