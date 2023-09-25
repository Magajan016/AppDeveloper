import React from 'react'
import Navbar1 from '../Components/Admin/Navbar1'

function Dashboard() {
  return (
    <div>
        <Navbar1/>
        <button
          class="group relative flex h-12 items-center space-x-2 overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-6 hover:to-purple-600"
        >
          <span class="relative text-sm text-white">Get Started</span>
          <div class="flex translate-x-3 items-center -space-x-3">
            <div
              class="h-[1.6px] w-2.5 origin-left scale-x-0 rounded bg-white transition duration-300 group-hover:scale-x-100"
            ></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 -translate-x-2 stroke-white transition duration-300 group-hover:translate-x-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
    </div>
  )
}

export default Dashboard;