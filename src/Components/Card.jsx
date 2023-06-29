import React from "react";
import { Link } from "react-router-dom";

const Card = ({ dentist }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">

        <div>
            <h2>{dentist.name}</h2>
            <p>{dentist.username}</p>
            <p>{dentist.id}</p>

            <Link to={`/dentist/${dentist.id}`}>
            ir
            </Link>
          </div>

        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
