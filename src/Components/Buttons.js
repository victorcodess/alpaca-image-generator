import React, { useState, useMemo } from "react";
import alpacaDatabase from "../alpacaData";

const Buttons = ({ onSelectDir, alpacaState }) => {
  const item = useMemo(() => {}, [alpacaState]);

  return (
    <div className="right">
      <div className="feature-control">
        <h2 className="feature-btn-header">ACCESSORISE THE ALPACA'S</h2>
        <div className="feature-btn-wrapper">
          {alpacaState.map((feature, index) => (
            <button
              key={index}
              className={
                feature.selected ? "feature-btn-selected" : "feature-btn"
              }
              onClick={() => onSelectDir(feature.label)}
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
