import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegClock ,FaUser} from "react-icons/fa";
import { BiLogoFacebook ,BiLogoYoutube} from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { BsTwitter} from "react-icons/bs";
import { AiOutlineArrowRight,AiOutlineLinkedin} from "react-icons/ai";
function Navbar1() {
  return (
    <div className='w-screen bg-blue-600'>
         <div className="flex w-full p-2">
        <div className="flex  divide-x w-full justify-center items-center divide-slate-400 list-none">
         <li className="flex items-center">
            <IoCallOutline className=" text-white mt-1 mr-1"/>  
          <span className="flex space-x-4 hover:text-black cursor-pointer text-white">
            (+91) 9363339028
          </span>
         </li>
         
         <li className=" ml-5">
          <span className="flex space-x-4 text-white">
           <MdOutlineMailOutline className="mt-1.5 mr-1 ml-4"/>
            seek@gmail.com
          </span>
         </li>
         <li className="mr-5 ml-4">
          <span className="flex space-x-4 text-white">
            <FaRegClock className="mt-1.5 mr-1 ml-4"/>
            Mon-Sat: 8:00 - 16:30
          </span>
         </li>
         </div>
         <div className="flex space-x-4 w-full list-none justify-end items-center mr-5">
          <li>
            <span className="text-white ">Follow Us : </span>
          </li>
          <li className="text-white cursor-pointer text-xl">
            <BiLogoFacebook/>
          </li>
          <li className="text-white cursor-pointer text-xl">
            <GrInstagram/>
          </li>
          <li className="text-white cursor-pointer text-xl">
            <BsTwitter/>
          </li>
          <li className="text-white cursor-pointer text-2xl">
            <AiOutlineLinkedin/>
          </li>
          <li className="text-white cursor-pointer text-2xl">
            <BiLogoYoutube/>
          </li>
          <li className="text-white cursor-pointer text-bold text-xl">
            <FaUser/>
          </li>
        </div>
      </div>  
    </div>
  )
}

export default Navbar1