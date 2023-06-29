import React, { useState } from 'react'
import Card from '../Components/Card'
import { useEffect } from 'react'
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  
  const [dentist,setDentist] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setDentist(res.data)
      })
  },[])
  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        <ol>
          {dentist.map(dentista => {
              return <Card key={dentista.id} dentist={dentista}/>
          })}
        </ol>
      </div>
    </main>
  )
}

export default Home