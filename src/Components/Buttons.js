import React, { useState } from "react";
import alpacaDatabase from "../alpacaData";

const Buttons = (props) => {
  const [feature, setFeature] = useState({});

  const handleSetDir = (feature) => {
    setFeature(() => feature);
  };

  return (
    <div className="buttons">
      <div className="feature-buttons">
        <h2 className="header">ACCESSORISE THE ALPACA'S</h2>
        {alpacaDatabase.map((feature, index) => (
          <button className="feature" onClick={() => handleSetDir(feature)}>
            {feature.label}
          </button>
        ))}
      </div>

      <div className="style-buttons">
        {Object.keys(feature).length
          ? feature.items.map((item, index) => (
              <div key={index} className="style-grid">
                <button className="style">{item.label}</button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Buttons;
