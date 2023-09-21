import { Dashboard, Message, People, Person, Person2, Search, Settings, } from '@mui/icons-material';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import React, { useState } from 'react'
import { BsArrowLeftCircle,BsSearch,BsFillImageFill} from "react-icons/bs";
import { HiOutlineMenu  } from "react-icons/hi";
import { FiSettings  } from "react-icons/fi";
import { RiDashboardFill,RiMessage2Line} from "react-icons/ri";
import { AiOutlineFileText ,AiOutlineBarChart} from "react-icons/ai";
import { GoUnread ,GoFileMedia} from "react-icons/go";
import { FcSettings} from "react-icons/fc";
import { BiLogOut,BiMessageSquareDetail} from "react-icons/bi";
import { IoMdNotificationsOutline,IoPeopleCircleSharp} from "react-icons/io";
import { MdAccountCircle} from "react-icons/md";
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';

function Navbar1() {
    const [open,setOpen] = useState(false);
    const [isHovered,setIsHovered]=useState(false);
    const nav=useNavigate();
    const user = useSelector(selectUser)
    const Menus = [
        {title:"Dashboard"},
        {title:"Pages",icon:<AiOutlineFileText/>},
        {title:"Projects" ,icon:<BsFillImageFill/>},
        {title:"Analytics",spacing:true,icon:<AiOutlineBarChart/>},
        {title:"Inbox",icon:<RiMessage2Line/>},
        {title:"Media",icon:<GoFileMedia/>},
        {title:"Profile" , spacing:true,icon:<People/>},
        {title:"Setting",icon:<FiSettings />},
        {title:"Logout",icon:<BiLogOut/>},

    ]
  return (
    <div className='flex'>    
        <div className={`flex flex-col  bg-white rounded-xl space-y-10 shadow-black h-screen ${open ? "w-64" : "w-20 "}  transition-width duration-300 relative`} 
        onMouseEnter={()=>setOpen(true)} 
        onMouseLeave={()=>setOpen(false)}>
        <div className='bg-slate-800 h-screen p-5 space-y-3'>
            {/* <p className='font-serif font-bold text-2xl'>Admin Dashboard</p> 
             <BsArrowLeftCircle className={`text-blue-400 rounded-full bg-white text-3xl absolute -right-3  top-15 cursor-pointer ${!open && "rotate-180"}`}onClick={()=>setOpen(!open)}/> */}
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
                {/* <li key={index} className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-black hover:bg-light-white rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
                    <span className='text-2xl block float-left'>
                     {menu.icon?menu.icon:<RiDashboardFill/>}
                    </span>
                    <span className={`text-base font-medium flex-1 ${!open && "hidden"}`} onClick={handleClick}>{menu.title}</span>
                </li> */}
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
    <div className='flex flex-col w-full space-y-3'>
       <div className=' flex h-20 bg-slate-800 w-full shadow'>
           
        {/* <p className=''>Welcome <span>{user.email}</span></p> */}
            {/* <h1 className='p-2 '>Welcome to Dashboard</h1> */}
            {/* <IoMdNotificationsOutline/>
            <button className='items-end'><MdAccountCircle/></button> */}
        
            <div className='items-end w-full'>
                <BiMessageSquareDetail className='items-end'/>
            </div>
       </div>
        <div>
            <h1 className='text-2xl w-full shadow-sm p-4 shadow-black text-center'>Dashboard Page</h1>
        </div>
        <div className='flex  grid-flow-row space-x-3 justify-center'>
            <div className='grid w-46 shadow-sm p-10  shadow-black'>Students</div>
            <div className='grid w-46 shadow-sm p-10  shadow-black'>Teachers</div>
            <div className='grid w-46 shadow-sm p-10  shadow-black'>Admissions</div>
            <div className='grid w-46 shadow-sm p-10  shadow-black'>Projects</div>
        </div>
    </div>
    </div>
        
  )
}

export default Navbar1