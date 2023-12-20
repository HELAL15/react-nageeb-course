import React from 'react'
import { Link } from 'react-router-dom'

export default function TopBar() {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-dark top-bar'>
        <div className="container-fluid">
          <h1 className="navbar-brand text-info fw-bold fs-3">Dashboard</h1>
          <Link className='btn btn-outline-info' to='/'>Go To Website</Link>
        </div>
      </nav>
    </>
  )
}
