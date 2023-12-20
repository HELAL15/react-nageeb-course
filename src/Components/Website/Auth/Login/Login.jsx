import React, { useContext } from 'react'
import { useState } from 'react';
import axios from 'axios';
import {User} from '../../../context/context'
import { useNavigate } from 'react-router-dom';
// import Form from '../Form/Form';

export default function Login() {

  const userNow = useContext(User)
  // console.log(userNow);
  const nav = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [accept, setAccept] = useState(false);


async function handel_submit (e){
  let flag = false
e.preventDefault()
setAccept(true)

if(password.length < 8){
  flag = false
}else{
  flag = true
}

try{
  if (flag){
    let res = await axios
    .post('http://127.0.0.1:8000/api/login' , {
      email:email,
      password:password,
    })
        
    if(res.status === 200){
    // window.localStorage.setItem('email', email);
    // window.localStorage.setItem('password', password);
    // window.location.pathname = '/';

    // console.log(res);
    }
        const token = res.data.data.token;

    userNow.setAuth(token)

    console.log(token);
    const userDetails = res.data.data.user;
    console.log(userDetails);
    userNow.setAuth({token , userDetails});
    nav('/dashboard')
  }

}catch(error){
setEmailError(error.response.status)
}


}

  return (
    <div className='container'>
   <form action='' onSubmit={handel_submit} className='my-5'>
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
            {  accept && emailError === 422 && <div id="emailError" className="form-text text-danger">this email is already been taken</div>}
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
      <button type="submit" className="btn btn-outline-info">login</button>
    </form>
  </div>
  )
}
