import React from "react";

const Preview = ({ alpacaState }) => {
  return (
    <div className="alpaca" id="alpaca">
      {alpacaState.map((dir) => {
        const item = dir.items.find((item) => item.selected);
        if (!item) return null;
        return (
          <img
            src={require(`../alpaca/${dir.directory}/${item.filename}.png`)}
            alt="something went wrong"
            className={`alpaca-${dir.directory}`}
          />
        );
      })}
    </div>
  );
};

export default Preview;
