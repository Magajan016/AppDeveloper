import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegClock ,FaUser} from "react-icons/fa";
import { BiLogoFacebook ,BiLogoYoutube} from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { BsTwitter} from "react-icons/bs";
import { AiOutlineArrowRight,AiOutlineLinkedin} from "react-icons/ai";
import { useNavigate } from "react-router-dom";


function Navbar() {
  const nav = useNavigate();
  return (
    <div class="flex flex-col h-32 bg-blue-600 w-full ">
      <div className="flex w-full p-2">
        <div className="flex  divide-x w-full justify-center items-center divide-slate-400 list-none">
         <li className="flex items-center">
            <IoCallOutline className=" text-white mt-1 mr-1"/>  
          <span className="flex space-x-4 hover:text-black cursor-pointer text-white">
            +111 (564) 562 25
          </span>
         </li>
         
         <li className=" ml-5">
          <span className="flex space-x-4 text-white">
           <MdOutlineMailOutline className="mt-1.5 mr-1 ml-4"/>
            college@gmail.com
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
          <li className="text-white cursor-pointer text-bold hover:text-red-400" onClick={()=>nav('/login')}>
           Login / Register
          </li>
        </div>
      </div>  
    <div className="flex space-x-44 items-center border-2 rounded-tl-full  h-full bg-white  justify-center">
      <div className="text-2xl p-4 justify-center font-bold  font-dmsans shadow-sm   text-black"> COLLEGE</div>
      
      <div className="flex justify-evenly  space-x-20">
      <div class="text-xl   cursor-pointer p-2">
       <button className="hover:text-blue-600"> Home</button>
      </div>
      <div className="text-xl   cursor-pointer p-2">
      <button className="hover:text-blue-600"> About</button>
      </div>
      <div class="text-xl  cursor-pointer p-2">
      <button className="hover:text-blue-600">  Course</button>
      </div >
      <div class="text-xl  cursor-pointer p-2">
      <button className="hover:text-blue-600"> Instructor</button>
      </div>
      <div class="text-xl  cursor-pointer p-2">
      <button className="hover:text-blue-600"> Blog</button>
      </div>
      <div class="bg-blue-600 rounded cursor-pointer hover:bg-slate-700 text-white p-2">
      <button className="flex   justify-evenly font-poppins"> Explore Now  </button>
      </div>
    </div>
    </div>
  </div>
  )
}

export default Navbar