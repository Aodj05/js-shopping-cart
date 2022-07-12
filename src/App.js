import React from "react";
import './App.css';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Product from "./components/Product";
import Vending from "./components/Vending";
import CartItem from "./components/CartItem"

function App() {

  return (
    <div className="App">
     <BrowserRouter>
       <NavBar />
       <Routes>
         <Route path="/" exact element={<Home />} />
         <Route path="/vending" exact element={<Vending />} />
         <Route path="/cart" exact element={<Cart />} />        
         <Route path="/product" element={<Product />} />
         <Route path="/vending/:id" element={<Product />} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
