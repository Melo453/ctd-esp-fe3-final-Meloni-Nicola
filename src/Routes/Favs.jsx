import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useContext(ContextGlobal)
  const {favs} = state.favs
  
  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favs))
  },[favs])
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map((item) => 
          <Card

        key={item.id}
        item={item}
      />
        )}
        
      </div>
    </>
  );
};

export default Favs;
