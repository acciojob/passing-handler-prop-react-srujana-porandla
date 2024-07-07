import React, { useState } from 'react';

const Selection = ({ applyColor }) => {
  const [color, setColor] = useState({ background: "" });

  return (
    <div className="fix-box" onClick={() => applyColor(setColor)} style={color}>
      <h2 className="subheading">Selection</h2>
    </div>
  );
};

export default Selection;