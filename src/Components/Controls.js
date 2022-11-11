import React from "react";

const Controls = ({ alpacaData, onRandomize, onDownload }) => {
  return (
    <div className="controls-btns">
      <button className="randomize-btn" onClick={() => onRandomize()}>
        Randomize
      </button>
      <button className="download-btn" onClick={() => onDownload()}>
        Download
      </button>
    </div>
  );
};

export default Controls;
