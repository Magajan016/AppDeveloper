import React, { useState } from 'react'
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { BsArrowLeftCircle,BsSearch,BsFillImageFill} from "react-icons/bs";
import { HiOutlineMenu  } from "react-icons/hi";
import { RiDashboardFill,RiMessage2Line} from "react-icons/ri";
import { AiOutlineFileText ,AiOutlineBarChart} from "react-icons/ai";
import { GoUnread ,GoFileMedia} from "react-icons/go";
import { FcSettings} from "react-icons/fc";
import { BiLogOut} from "react-icons/bi";
import { IoMdNotificationsOutline} from "react-icons/io";
import { MdAccountCircle} from "react-icons/md";
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';
function Navbar() {
    const [open,setOpen]=useState(true);
    const user = useSelector(selectUser)
    const Menus = [
        {title:"Dashboard"},
        {title:"Pages",icon:<AiOutlineFileText/>},
        {title:"Projects" ,icon:<BsFillImageFill/>},
        {title:"Analytics",spacing:true,icon:<AiOutlineBarChart/>},
        {title:"Inbox",icon:<RiMessage2Line/>},
        {title:"Media",icon:<GoFileMedia/>},
        {title:"Profile" , spacing:true},
        {title:"Setting",icon:<FcSettings className='text-white'/>},
        {title:"Logout",icon:<BiLogOut/>},

    ]
  return (
    // <div className='flex flex-row space-x-10 justify-end bg-white p-5'>
        
        
    //     <button className='flex gap-2  p-2 w-24 hover:bg-white hover:text-black bg-slate-700 text-white rounded-sm '>
    //         <FaHome className='mt-1'/>Home
    //         </button>
    //     <button className='p-2 bg-slate-700 text-white rounded-sm hover:font-serif hover:bg-white hover:text-black'>About</button>
    //     <button className='p-2 bg-slate-700 text-white rounded-sm hover:bg-white hover:text-black'>Academics</button>
    //     <button className='p-2 bg-slate-700 text-white rounded-sm hover:bg-white hover:text-black'>Admission</button>
    //     <button className='p-2 bg-slate-700 text-white rounded-sm hover:bg-white hover:text-black'>DashBoard</button>
    //     <button className='p-2 bg-slate-700 text-white rounded-sm hover:bg-white hover:text-black'>Courses</button>
    //     <button className='p-2 bg-slate-700 text-white rounded-sm hover:bg-white hover:text-black'>Login</button>
        
    // </div>
    <div className='flex'>    
        <div className={`flex flex-col  bg-white rounded-xl space-y-10 shadow-black h-screen ${open ? "w-64" : "w-20"}  transition-width duration-300 relative`}  >
        <div className='bg-blue-300 h-screen p-5 space-y-3'>
            {/* <p className='font-serif font-bold text-2xl'>Admin Dashboard</p> */}
            <BsArrowLeftCircle className={`text-blue-400 rounded-full bg-white text-3xl absolute -right-3  top-15 cursor-pointer ${!open && "rotate-180"}`}onClick={()=>setOpen(!open)}/>
        <div className='inline-flex  '>
            <HiOutlineMenu className={`pt-2 cursor-pointer block float-left mr-2 text-white text-3xl  duration-500 ${!open && "rotate-[360deg]"}`}/> 
            <p className={`text-white text-3xl duration-300 ${!open && "scale-0"}`}>Menu</p>
        </div>
        <div className='flex bg-light-white items-center rounded-md px-3 py-2'>
            <BsSearch className={` text-white text-lg block float-left cursor-pointer  ${open ? "mr-2":""}`}/>
            <input type={'search'} id="search" placeholder="search" className={`placeholder:text-2xl  focus:outline-none w-full text-white bg-transparent ${!open && "hidden"}`}></input>

        </div>
        <ul className='pt-2'>
            {Menus.map((menu, index)=>(
                <>
                <li key={index} className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-black hover:bg-light-white rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
                    <span className='text-2xl block float-left'>
                     {menu.icon?menu.icon:<RiDashboardFill/>}
                    </span>
                    <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>{menu.title}</span>
                </li>
                </>
            ))}
        </ul>
       </div>

    
    </div>
    </div>
  )
}

export default Navbar