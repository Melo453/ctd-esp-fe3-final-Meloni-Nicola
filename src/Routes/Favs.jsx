import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";

const Favs = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    const savedDentists = localStorage.getItem("favoriteDentists");
    if (savedDentists) {
      const parsedDentists = JSON.parse(savedDentists);
      setDentists(parsedDentists);
    }
  }, []);

  return (
    <div>
      {dentists.map((dentist) => (
        <div className="card" key={dentist.id}>
          <div>
            <h2>{dentist.name}</h2>
            <p>{dentist.username}</p>
            <p>{dentist.id}</p>
            <Link to={`/dentist/${dentist.id}`}>Ver</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favs;