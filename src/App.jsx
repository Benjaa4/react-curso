import "./App.css";
import Text from "./TextPage";
import ItemListContainer from "./ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './Navbar.jsx'


function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Text />
      <Routes>
        <Route path="/productos" element={<ItemListContainer />} />

      </Routes>

    </BrowserRouter>

  )

}

export default App;
