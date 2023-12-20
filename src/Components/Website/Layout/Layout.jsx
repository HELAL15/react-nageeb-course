import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <Header/>
      <div className="container">
      <Outlet></Outlet>
      </div>
    </div>
  )
}
