import React, { useState } from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const [name, setName] = useState('')
  const [email,setEmail] = useState('')
  
  const handleSubmit = (e) => {
   e.preventDefault();
   //
   //
   console.log({name,email})
  }

  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default Contact