import React from 'react'
import Sidebar from '../../Pages/Sidebar'
import Sidebar1 from './Dashboard/Sidebar1'
import Home from './Dashboard/Home'
import Student from './Dashboard/Student'

function MainDashboard() {
  return (
    <div className='h-screen w-[98.9vw]'>
        <Sidebar/>
        <div className='flex '>
        <Sidebar1/>
        <Student/>
        </div>
    </div>
  )
}

export default MainDashboard