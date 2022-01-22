import React from 'react';
import './Card.css';

export default (props) => {
  return (
    <div className="Card">
      <div className="Title"> <h2>{ props.titulo } </h2> </div>
      <div className="Content">
        {props.children}
      </div>
    </div>
  );
};