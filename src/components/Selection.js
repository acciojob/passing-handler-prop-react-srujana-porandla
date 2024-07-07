import React, { useState, useEffect } from 'react';

const Selection = ({ selectedColor }) => {
  const [color, setColor] = useState(selectedColor);

  useEffect(() => {
    setColor(selectedColor);
  }, [selectedColor]);

  return (
    <div className="fix-box" style={{ backgroundColor: color }}>
      <h2>Selection</h2>
    </div>
  )
}

export default Selection;