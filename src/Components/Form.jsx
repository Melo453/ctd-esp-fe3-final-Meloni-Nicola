import React, { useState } from "react";


const Form = () => {
  const [name, setName] = useState('')
  const [email,setEmail] = useState('')

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
   e.preventDefault();
   if(name.length <= 5 || !emailRegex.test(email)){
    setMessage("Por favor, verifique que su nombre contenga más de 5 caracteres y que su email tenga un formato correcto")
   }else
      setMessage(`"Gracias ${name } ,te contactaremos cuanto antes vía mail”`)

  }

  return (
    <div>
      <h2>Querés conocer más?</h2>
      <p>Contactanos y te responderemos lo antes posible</p>
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
