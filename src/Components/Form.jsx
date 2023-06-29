import React, { useState } from "react";


const Form = () => {
  const [name, setName] = useState('')
  const [email,setEmail] = useState('')

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
   e.preventDefault();
   if(name.length <= 5 || !emailRegex.test(email)){
    setMessage("Por favor verifique su informacion nuevamente")
   }else
      setMessage(`Gracias ${name},${email}`)

  }

  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <button type='submit'>Enviar</button>
        <p>{message }</p>
      </form>
    </div>
  );
};

export default Form;
