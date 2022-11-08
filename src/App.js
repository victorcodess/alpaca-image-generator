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

  const handleSelectItem = (itemName) => {};

  return (
    <div>
      <Header />
      <div className="container">
        <div className="left">
          <Preview />
        </div>
        <div className="right">
          <Buttons onSelectDir={handleSelectDir} alpacaState={state} />
        </div>
      </div>
    </div>
  );
}

export default App;
