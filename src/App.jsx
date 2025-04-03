import "./App.css";
import Text from "./TextPage";
import ItemListContainer from "./ItemListContainer.jsx";
import Navbar from './Navbar.jsx'
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Text />
      <Routes>

        <Route exact path='/Productos' element={<ItemListContainer />}></Route>
      </Routes>
    </BrowserRouter>

  )

}

export default App;
