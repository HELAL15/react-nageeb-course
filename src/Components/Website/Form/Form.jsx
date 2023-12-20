import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import {User} from '../../context/context'
import { useNavigate } from 'react-router-dom';


export default function Form(props) {

const userNow = useContext(User)
// console.log(userNow);
const nav = useNavigate()

const [name, setName] = useState(props.name || '');
const [email, setEmail] = useState(props.email || '');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [accept, setAccept] = useState(false);
  const [rePassowrd, setRePassowrd] = useState('');

  useEffect(()=>{
      setName(props.name)
      setEmail(props.email)
  },[props.name , props.email])

async function handel_submit (e){
  let flag = false
e.preventDefault()
// setAccept(true)

if(name === '' || password.length < 8 || password !== rePassowrd){
  flag = false
}else{
  flag = true
}

try{
  if (flag){
    let res = await axios
    .post(`http://127.0.0.1:8000/api/${props.endPoint}` , {
      name: name,
      email:email,
      password:password,
      password_confirmation:rePassowrd
    })

  const token = res.data.data.token;
  const userDetail = res.data.data.user;
  userNow.setAuth({token , userDetail});
  console.log(userDetail);
  nav('/dashboard')
  // https://cpanel.infinityfree.com/panel/indexpl.php
  
    if(res.status === 200){
    // props.hasLocalStorage && window.localStorage.setItem('email', email);
    // props.hasLocalStorage && window.localStorage.setItem('password', password);
    // window.location.pathname = `/${props.navigate}` ;
    }
  }
}catch(error){
// setEmailError(error.response.status)
  if(error.response.status === 422 || error.response.status === 401){
    setEmailError(true)
  }
  setAccept(true)
}

}



  return (
    <form action='' onSubmit={handel_submit} className='my-5'>
    <div className="mb-3">
        <label htmlFor="name" className="form-label">user name</label>
          <input
            type="text" 
            name="name" 
            className="form-control"
            placeholder='user name'
            id="name" 
            required
            value={name}
            onChange={(e)=> setName(e.target.value)}
            />
            { name === '' &&  accept && <div id="nameHelp" className="form-text text-danger">first name is required</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="Email" className="form-label">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder='email'
            id="Email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
            {  accept && emailError  && <div id="emailError" className="form-text text-danger">this email is already been taken</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="Password1" className="form-label">Password</label>
        <input
          type="password"
          name='password'
          className="form-control"
          placeholder='password'
          id="Password1"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          />
          {password.length < 8 && accept && <div id="passHelp" className="form-text text-danger">password must be more than 8 character</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="RePassword1" className="form-label">Repeat Password</label>
        <input
          type="password"
          name='re_password'
          className="form-control"
          placeholder='re enter password'
          id="RePassword1"
          value={rePassowrd}
          onChange={(e)=> setRePassowrd(e.target.value)}
          />
            {password !== rePassowrd && accept && <div id="pass2Help" className="form-text text-danger">password does not match</div>}
      </div>
      <button type="submit" className="btn btn-outline-info">{props.button}</button>
    </form>
  )
}
