import React, { useState } from 'react'
import Card from '../Components/Card'
import { useEffect } from 'react'
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  
  const [dentist,setDentist] = useState([])

  const [favs, setFavs] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setDentist(res.data)
      }) 
  },[])
  
  function handleFav(objeto) {
    const localData = localStorage.getItem("favs");
    const data = localData ? JSON.parse(localData) : [];
    const actualizado = data.filter((data) => data.id != objeto.id);
    if (actualizado.length < favs.length) {
      setFavs(actualizado);
      localStorage.setItem("favs", JSON.stringify(actualizado));
      
    } else {
      setFavs([...actualizado, objeto]);
      localStorage.setItem(
        "favs",
        JSON.stringify([...actualizado, objeto])
      );
    }
  }
  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        <ol>
          {dentist.map(dentista => {
              return <Card key={dentista.id} dentist={dentista} button={handleFav}/>
          })}
        </ol>
      </div>
    </main>
  )
}

export default Home