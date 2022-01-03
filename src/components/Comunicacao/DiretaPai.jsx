/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import DiretaFilho from "./DiretaFilho";

export default (props) => {
  return (
    <div>
      <DiretaFilho nome="Júnior " idade={20} nerd={true}></DiretaFilho>
      <DiretaFilho nome="Marcelo " idade={15} nerd={false}></DiretaFilho>
      <DiretaFilho nome="Rodrigo " idade={12} nerd={true}></DiretaFilho>
    </div>
  );
};
