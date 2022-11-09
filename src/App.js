import "./App.css";
import Header from "./Components/Header";
import Preview from "./Components/Preview";
import Buttons from "./Components/Buttons";
import { useState } from "react";
// database
import alpacaData from "./alpacaData";
import Controls from "./Components/Controls";

function App() {
  const [state, setState] = useState(alpacaData);

  const handleSelectDir = (dirname) => {
    setState(() => {
      const index = state.findIndex((dir) => dirname === dir.label);
      if (index === -1) return;

      // deselect initial directories
      const newState = state.map((dir) => ({ ...dir, selected: false }));
      const newDir = { ...newState[index], selected: true };

      newState[index] = newDir;
      return newState;
    });
  };

  const handleSelectItem = (itemName) => {
    setState((prevState) => {
      const newState = [...prevState];
      const dirIndex = newState.findIndex((dir) => dir.selected);
      if (dirIndex === -1) return;
      const itemIndex = newState[dirIndex].items.findIndex(
        (item) => item.label === itemName
      );

      // deselect intial items
      const newDir = {
        ...newState[dirIndex],
        items: newState[dirIndex].items.map((item) => ({
          ...item,
          selected: false,
        })),
      };

      // set selected item to true
      const newItem = { ...newDir.items[itemIndex], selected: true };
      newDir.items[itemIndex] = newItem;

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
          <Controls />
        </div>
        <div className="right">
          <Buttons
            onSelectDir={handleSelectDir}
            alpacaState={state}
            onSelectItem={handleSelectItem}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
