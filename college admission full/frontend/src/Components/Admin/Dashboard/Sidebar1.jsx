import { EventAvailable, LocalFireDepartmentRounded, Logout, SettingsAccessibilityOutlined } from "@mui/icons-material";
import React from "react";
import { PiChalkboardTeacher } from "react-icons/pi";
import { VscNotebook } from "react-icons/vsc";
import { RxDashboard } from "react-icons/rx";
import Sidebar from "../../../Pages/Sidebar";
import { useNavigate } from "react-router-dom";

function Sidebar1() {
  const navigate = useNavigate();
  const handleStorage = (e)=>{
       localStorage.clear();
       navigate('/login')
  }
  return (
    <div className="h-[630px] w-56 shadow ml-2 mt-2 rounded  border border-slate-200">
    <div className="flex flex-col  h-full"> 
      <div className="flex flex-col  p-2 cursor-pointer hover:bg-slate-400">
       <div className="flex gap-4" > <RxDashboard className="mt-1 text-black " />
        <div className="text-xl  font-poppins ">Dashboard</div></div>
      </div>
         <hr className="w-full flex text-end"></hr> 
      <div className="flex flex-col p-2  cursor-pointer hover:bg-slate-400">
        <div className="flex gap-4"><i class="fa fa-user  mt-1"></i>
        <div className="text-xl  font-poppins">Students</div></div>
      </div>
      <hr className="w-full"></hr>
      <div className="flex  flex-col p-2 hover:bg-slate-400">
        <div className="flex gap-4"><PiChalkboardTeacher className="mt-1" />
        <div className="text-xl  font-poppins ">Staff</div></div>
      </div>
      <hr className="w-full"></hr>

      <div className="flex gap-4 p-2 cursor-pointer hover:bg-slate-400">
        <LocalFireDepartmentRounded className="mt-1" />
        <div className="text-xl  font-poppins">Departments</div>
      </div>
      <hr className="w-full"></hr>
    
      <div className="flex gap-4 p-2 cursor-pointer hover:bg-slate-400">
        <EventAvailable className="mt-1" />
        <div className="text-xl  font-poppins">Events</div>
      </div>
      <hr className="w-full"></hr>

      <div className="flex gap-4 p-2 cursor-pointer hover:bg-slate-400">
        <VscNotebook className="mt-1" />
        <div className="text-xl  font-poppins">Attendence</div>
      </div>
      <hr className="w-full"></hr>

      <div className="flex gap-4 p-2 cursor-pointer hover:bg-slate-400">
        <SettingsAccessibilityOutlined className="mt-1" />
        <div className="text-xl  font-poppins cursor-pointer">Setting</div>
      </div>
      <hr className="w-full"></hr>

      <div className="flex gap-4 p-2 hover:bg-slate-400">
        <Logout className="mt-1" />
        <div className="text-xl  font-poppins cursor-pointer" onClick={handleStorage}>Logout</div>
      </div>
      <hr className="w-full"></hr>
    </div>
  </div>
  );
}

export default Sidebar1;
