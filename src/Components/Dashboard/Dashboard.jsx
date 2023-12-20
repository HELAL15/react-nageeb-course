import React from 'react'
import TopBar from './topBar/TopBar'
import SideBar from './sideBar/SideBar'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className='bg-dark'>
      <TopBar/>
      <div className='d-flex'>
        <SideBar/>
        <div className='outlet'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}
