import "./App.css";
import Text from "./TextPage";
import ItemListContainer from "./ItemListContainer.jsx";

function App() {
  return (
    <div className="App">
      <h1>Techshop</h1>
      <p>
        Techshop is a virtual store where you can find anything related to
        technology.
      </p>
      <ItemListContainer />
      <Text />
    </div>
  );
}

export default App;
