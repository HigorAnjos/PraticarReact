import React from "react";

const aleatorio = (props) => {
  const { min, max } = props;
  return (
    <div>
      <h2>Numero aleatorio: </h2>
      { Math.random() * (max - min) + min }
    </div>
  );
};

export default aleatorio;