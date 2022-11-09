import React, { useMemo } from "react";

const Buttons = ({ onSelectDir, onSelectItem, alpacaState }) => {
  const items = useMemo(() => {
    const selectedDir = alpacaState.find((dir) => dir.selected);
    if (!selectedDir) return;
    return selectedDir.items;
  }, [alpacaState]);

  return (
    <div className="right">
      <div className="feature-control">
        <h2 className="feature-btn-header">ACCESSORISE THE ALPACA'S</h2>
        <div className="feature-btn-wrapper">
          {alpacaState.map((feature, index) => (
            <button
              key={index}
              className={
                feature.selected
                  ? "feature-btn_selected feature-btn"
                  : "feature-btn"
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
          {items
            ? items.map((item, index) => (
                <button
                  key={index}
                  className={
                    item.selected ? "style-btn_selected style-btn" : "style-btn"
                  }
                  onClick={() => onSelectItem(item.label)}
                >
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
