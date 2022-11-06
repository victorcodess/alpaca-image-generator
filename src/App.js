import "./App.css";
import Header from "./Components/Header";
import Preview from "./Components/Preview";
import Buttons from "./Components/Buttons";

function App() {
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
