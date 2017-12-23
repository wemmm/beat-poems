import React, { Component } from 'react';
import lines from './lines.json';
import './Line.css';

const Line = (props) => {
  return (
    <div>
      <p>{props.label}</p>
      <h2>{lines.line1[1]}</h2>
      <h2>{lines.line2[0]}</h2>
      <h2>{lines.line3[2]}</h2>
      <input
        type="button"
        onClick={props.handleClick}
      />
    </div>
  );
}

export default Line;
