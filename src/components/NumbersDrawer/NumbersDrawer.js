import React from 'react';

const NumbersDrawer = props => {
  return (
      <div className="FiveOf36">
        <div className="numberOf36">{props.numbers[0]}</div>
        <div className="numberOf36">{props.numbers[1]}</div>
        <div className="numberOf36">{props.numbers[2]}</div>
        <div className="numberOf36">{props.numbers[3]}</div>
        <div className="numberOf36">{props.numbers[4]}</div>
      </div>
  );
};

export default NumbersDrawer;