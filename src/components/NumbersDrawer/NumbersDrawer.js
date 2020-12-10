import React from 'react';

const NumbersDrawer = props => {
  return (
      <div className="fiveOf36" style={{display: props.display}}>
        <div className="numberOf36">{props.numbers[0]}</div>
        <div className="numberOf36">{props.numbers[1]}</div>
        <div className="numberOf36">{props.numbers[2]}</div>
        <div className="numberOf36">{props.numbers[3]}</div>
        <div className="numberOf36">{props.numbers[4]}</div>
      </div>
  );
};

export default NumbersDrawer;