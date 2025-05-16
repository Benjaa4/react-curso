import "./App.css";
import Text from "./TextPage";
import ItemListContainer from "./ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './Navbar.jsx'
import Cart from './Cart/Cart.jsx'
import { useState } from "react";


function App() {
  const [cart, setCart] = useState([])
  return (

    <BrowserRouter>
      <Navbar />
      <Text />
      <Routes>
        <Route path="/productos" element={<ItemListContainer cart={cart} setCart={setCart} />} />
        <Route path="/carrito" element={<Cart cart={cart} setCart={setCart} />} />

      </Routes>

    </BrowserRouter>

  )

}

export default App;
