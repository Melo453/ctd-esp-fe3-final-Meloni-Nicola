import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";

const Favs = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    const savedDentists = localStorage.getItem("favs");
    if (savedDentists) {
      const parsedDentists = JSON.parse(savedDentists);
      setDentists(parsedDentists);
    }
  }, []);

  return (
    <div className="card-grid-favs">
      {dentists.map((dentist) => (
        <div className="card" key={dentist.id}>
            <h2>{dentist.name}</h2>
            <p>{dentist.username}</p>
            <p>{dentist.id}</p>
            <Link to={`/dentist/${dentist.id}`}>Ver</Link>
        </div>
      ))}
    </div>
  );
};

export default Favs;