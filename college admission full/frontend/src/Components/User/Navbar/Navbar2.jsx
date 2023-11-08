import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar2() {

  const nav = useNavigate();
  return (
    <div className='bg-darkcolor w-screen'>
      <div className="flex space-x-44 items-center border-2 p-4  h-full   justify-center">
          <div className="text-2xl p-4 justify-center font-bold s flex font-display shadow-sm  space-x-4   bg-white ">
            <div>
              <img
                src="https://res.cloudinary.com/dnghkq7oo/image/upload/v1695549851/logo-icon_ufxeau.svg"
                className="h-10"
              ></img>
            </div>{" "}
            <div className='text-4xl text-black'>SEEK</div>
          </div>

          <div className="flex justify-evenly  space-x-20 p-4 ">
            <div class="text-xl   cursor-pointer p-2 text-white">
              <button className="hover:text-blue-600" onClick={() => nav("/")}>
                {" "}
                Home
              </button>
            </div>
            <div className="text-xl   cursor-pointer p-2">
              <button
                className="hover:text-blue-600 text-white"
                onClick={() => nav("/about")}
              >
                {" "}
                About
              </button>
            </div>
            <div class="text-xl  cursor-pointer p-2">
              <button
                className="hover:text-blue-600 text-white"
                onClick={() => nav("/course")}
              >
                {" "}
                Course
              </button>
            </div>
            <div class="text-xl  cursor-pointer p-2">
              <button
                className="hover:text-blue-600 text-white"
                onClick={() => nav("/contact")}
              >
                {" "}
                Contact
              </button>
            </div>
            <div class="text-xl  cursor-pointer p-2">
              <button className="hover:text-blue-600 text-white"> Blog</button>
            </div>
            <div class="bg-blue-600 rounded cursor-pointer hover:bg-slate-700 hover:text-white text-black p-2">
              <button className="flex  w-32 justify-evenly font-poppins mt-1">
                {" "}
                Apply Now{" "}
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar2