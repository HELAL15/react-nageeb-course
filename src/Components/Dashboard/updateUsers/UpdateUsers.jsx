import React, { useEffect } from 'react'
import { useState } from 'react';
import Form from '../../Website/Form/Form';

export default function UpdateUsers() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const id = window.location.pathname.split('/').slice(-1)[0];

useEffect(()=>{
  fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
  .then(res=>res.json())
  .then(data=> {
    setName(data[0].name)
    setEmail(data[0].email)
  })
},[id])


  return (
    <div className='container'>

    <Form
    button='update' 
    name={name} 
    email={email} 
    endPoint={`user/update/${id}`}
    navigate='dashboard/users'
    hasLocalStorage={false}  />

  </div>
  )
}
