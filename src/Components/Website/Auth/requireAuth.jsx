import React, { useContext } from 'react'
import { User } from '../../context/context'
import { Navigate, Outlet, useLocation } from 'react-router-dom'


export default function RequireAuth() {
  const user = useContext(User)
  const location = useLocation()
  return user.auth.userDetail ? <Outlet/> : (<Navigate state={{from : location}} replace to='./login' />)

}
