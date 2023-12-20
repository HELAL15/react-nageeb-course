import React from 'react'
// import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
// import { Color } from '../../context/context2';

export default function SideBar() {

  return (
    <div className='bg-dark side-bar' >
      <NavLink  className='text-info nav-link ' to='/dashboard/users'>
        <i className="fa-solid fa-users"></i> users </NavLink>
        <NavLink className='text-info nav-link' to='/dashboard/newUser'>
        <i className="fa-solid fa-user-plus"></i> new user </NavLink>
        <NavLink className='text-info nav-link' to='/dashboard/Products'>
        <i className="fas fa-ring"></i> Products </NavLink>
        <NavLink className='text-info nav-link' to='/dashboard/newProduct'>
        <i className="fa-solid fa-plus"></i> new product </NavLink>
        {/* <Link className='text-info nav-link' to='/dashboard/users'>
        <i className="fa-solid fa-users"></i> users </Link> */}
    </div>
  )
}