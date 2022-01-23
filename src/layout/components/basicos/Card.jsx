import React from 'react';
import './Card.css';

export default (props) => {

  const cardStyle = {
    backgroundColor: props.color || '#F00',
    borderColor: props.color || '#F00'
  }

  return (
    <div className="Card" style={cardStyle}>
      <div className="Title"> <h2>{ props.titulo } </h2> </div>
      <div className="Content">
        {props.children}
      </div>
    </div>
  );
};