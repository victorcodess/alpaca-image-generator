import "./App.css";
import Header from "./Components/Header";
import Preview from "./Components/Preview";
import Buttons from "./Components/Buttons";
import { useState } from "react";
// database
import alpacaData from "./alpacaData";

function App() {
  const [state, setState] = useState(alpacaData);

  const handleSelectDir = (dirname) => {
    const index = state.findIndex((dir) => dirname === dir.label);
    if (index === -1) return;

    // deselect initial directories
    const newState = state.map((dir) => ({ ...dir, selected: false }));
    const newDir = { ...newState[index], selected: true };

    newState[index] = newDir;
    setState(() => newState);
  };

  const handleSelectItem = (itemName) => {
    const dirIndex = state.findIndex((dir) => dir.selected);
    if (dirIndex === -1) return;
    1234;

    const newDir = {
      ...state[dirIndex],
    };
    newDir.items.forEach((item) => (item.selected = false));
    const itemIndex = newDir.items.findIndex((item) => item.label === itemName);

    const newItem = { ...newDir.items[itemIndex], selected: true };
    newDir.items[itemIndex] = newItem;

    setState((prevState) => {
      const newState = [...prevState];
      newState[dirIndex] = newDir;

      return newState;
    });
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="left">
          <Preview />
        </div>
        <div className="right">
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default App;
