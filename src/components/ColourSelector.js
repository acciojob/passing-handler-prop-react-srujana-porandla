import React from 'react';

const ColourSelector = (props) => {
 const { config, selectNextBackground } = props
 
  const { background, classname, label } = config;
  //const { background } = config;
  return (
    <button className={`btn ${classname}`} onClick={() => selectNextBackground({background: background})}>
      {label}
    </button>
  )
}
export default ColourSelector;
