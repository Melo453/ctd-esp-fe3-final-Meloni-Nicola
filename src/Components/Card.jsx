import React from "react";
import { Link } from "react-router-dom";

const Card = ({ dentist, button }) => {

  const handleFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  
  return (
    <div className="card">

        <div>
            <h2>{dentist.name}</h2>
            <p>{dentist.username}</p>
            <p>{dentist.id}</p>

            <Link to={`/dentist/${dentist.id}`}>
            Ver
            </Link>
          </div>
          
        <button onClick={()=>{button(dentist)}} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
