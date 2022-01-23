import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props => {

  return (
    <div>
      <FamiliaMembro nome="Higor" sobrenome={ props.sobrenome } />
      <FamiliaMembro nome="Maria" {...props} />
      <FamiliaMembro nome="Laura" sobrenome="Ferreira"/>
    </div>
  );
}