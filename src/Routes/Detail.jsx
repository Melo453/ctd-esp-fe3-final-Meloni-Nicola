import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const [dentist, setDentist] = useState({})
  
  const {id} = useParams()
  
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => {
      setDentist(res.data)
    })
  },[id])

  return (
    <>
    <div className='card-detail'>
      <h1>Detail Dentist id </h1>
      <h2>{dentist.name} </h2>
      <h2>{dentist.email} </h2>
      <h2>{dentist.phone} </h2>
      <h2>{dentist.website} </h2>
      </div>
    </>
  )
}

export default Detail