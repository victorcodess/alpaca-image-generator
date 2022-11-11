import React from "react";

const Controls = ({ alpacaData, onRandomize }) => {
  return (
    <div className="controls-btns">
      <button className="randomize-btn" onClick={() => onRandomize()}>
        Randomize
      </button>
      <button className="download-btn">Download</button>
    </div>
  );
};

export default Controls;
