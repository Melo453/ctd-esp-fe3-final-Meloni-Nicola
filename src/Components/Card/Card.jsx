import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../utils/global.context";

const Card = ({ dentist, button }) => {

  const { state } = useContext(ContextGlobal);
  const theme = state?.theme || "dark";

  const handleFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  
  return (
    <div className={`card ${theme}`} >
      <h2>{dentist.name}</h2>
      <p>{dentist.username}</p>
      <p>{dentist.id}</p>
      <div className="card__links">
        <Link className="card__link" to={`/dentist/${dentist.id}`}>
          Ver
         </Link>
           
        <button className="card__button" onClick={()=>{button(dentist)}} >Add fav</button>
      </div>
            
    </div>
  );
};

export default Card;
