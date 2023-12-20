import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function Users() {

const [users, setUsers] = useState([]);
const [run, setRun] = useState(0)


useEffect(()=>{
  fetch('http://127.0.0.1:8000/api/user/show')
  .then(res=>res.json())
  .then(data=>setUsers(data))
},[run])

async function deleteUser(id) {

let res = await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`);

try{
  if(res.status === 200){
    console.log("delete has done")
    setRun((i)=> i+1)
  }
  }catch (error){
    console.log(error)
  }
}







const showUsers = users.map((user , index)=>
<tr key={index}>
  <td>{index+1}</td>
  <td>{user.name}</td>
  <td>{user.email}</td>
  <td className='d-flex gap-4 justify-content-center'>
    <button className='btn btn-outline-danger' onClick={()=>{deleteUser(user.id)}}>
      <i className="fas fa-trash"></i>
    </button>
    <Link to={`${user.id}`}>
      <button className="btn btn-outline-warning" > 
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
      </Link>
  </td>
</tr>)

  return (
    <>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {showUsers}
      </tbody>
    </table>
    </>
  )
}
