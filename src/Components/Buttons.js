import React, { useState } from "react";
import alpacaDatabase from "../alpacaData";

const Buttons = (props) => {
  const [feature, setFeature] = useState({});

  const handleSetDir = (feature) => {
    setFeature(() => feature);
  };

  return (
    <div className="right">
      <div className="feature-control">
        <h2 className="feature-btn-header">ACCESSORISE THE ALPACA'S</h2>
        <div className="feature-btn-wrapper">
          {alpacaDatabase.map((feature, index) => (
            <button
              key={index}
              className="feature-btn"
              onClick={() => handleSetDir(feature)}
            >
              {feature.label}
            </button>
          ))}
        </div>
      </div>

      <div className="style-control">
        <h2 className="style-btn-header">STYLE</h2>
        <div className="style-btn-wrapper">
          {Object.keys(feature).length
            ? feature.items.map((item, index) => (
                <button key={index} className="style-btn">
                  {item.label}
                </button>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Buttons;
