import React, { useState } from "react";
import { MdOutlineSpaceDashboard, MdOutlineLocalLibrary } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { PiChalkboardTeacherBold } from "react-icons/pi";
import {
  Dehaze,
  Domain,
  Group,
  HolidayVillageOutlined,
  Home,
  PermIdentity,
  PersonOutline,
  School,
  Search,
  TrendingDown,
  TrendingUp,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [numbers, setNumbers] = useState({
    students: "2000",
    teachers: "120",
    courses: "20",
    fees: "Rs.100000000000",
  });
  const handleTrue = () => {
    setIsTrue(!isTrue);
    console.log(isTrue);
  };
  const [image, setImage] = useState({
    images:
      "https://res.cloudinary.com/dnghkq7oo/image/upload/v1695574942/about_5_1_s6p4u5.png",
    name: "Arularasan",
  });
  const [isTrue, setIsTrue] = useState(false);

  const nav = useNavigate();
  return (
    <div className=" w-[98vw] h-screen ">
      <div className="flex">
        <div className="w-72 h-screen flex flex-col justify-evenly">
          <div className="flex  space-x-5 justify-center">
            <img
              src="https://res.cloudinary.com/dnghkq7oo/image/upload/v1695549851/logo-icon_ufxeau.svg"
              className="h-10 w-10"
            ></img>
            <h1 className="text-3xl font-productsansr">Seek</h1>
          </div>
          <div className="flex justify-center w-full ">
            <div className="h-16 w-16 bg-gray-400 rounded outline outline-3 outline-white flex justify-center ">
              <img src={image.images} className="h-16 w-16 rounded"></img>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex p-2 ml-2 w-64  space-x-5 hover:bg-blue-200 cursor-pointer hover:rounded">
              <div className="flex space-x-5 w-48 justify-start ">
                <MdOutlineSpaceDashboard className="fill-slate-500 text-xl mt-1 " />
                <h1 className="text-xl font-dmsans  text-gray-400">
                  Dashboard
                </h1>
              </div>
              <BsPlusLg className="mt-1  text-end " />
            </div>
            <div className="flex p-2 ml-2 w-64  space-x-5 hover:bg-blue-200 cursor-pointer hover:rounded">
              <div className="flex space-x-5 w-48 justify-start">
                <PersonOutline className="text-2xl mt-1" />.
                <h1 className="text-xl mr-2 font-dmsans text-gray-400">
                  Students
                </h1>
              </div>
              <BsPlusLg className=" mt-1 text text-end " />
            </div>
            <div className="flex p-2 ml-2 w-64  space-x-5 hover:bg-blue-200 cursor-pointer hover:rounded">
              <div className="flex space-x-5 w-48 justify-start">
                <PermIdentity className="text-xl mt-1" />
                <h1 className="text-xl font-dmsans text-gray-400">Teachers</h1>
              </div>
              <BsPlusLg className=" mt-1 text-end " />
            </div>
            <div className="flex p-2 ml-2 w-64  space-x-5 hover:bg-blue-200 cursor-pointer hover:rounded">
              <div className="flex space-x-5 w-48 justify-start">
                <School className="text-xl mt-1" />
                <h1 className="text-xl font-dmsans text-gray-400">Courses</h1>
              </div>
              <BsPlusLg className=" mt-1  text-end " />
            </div>
            <div className="flex p-2 ml-2 w-64  space-x-5 hover:bg-blue-200 cursor-pointer hover:rounded">
              <div className="flex space-x-5 w-48 justify-start">
                <Domain className="text-xl mt-1" />
                <h1 className="text-xl font-dmsans text-gray-400">
                  Departments
                </h1>
              </div>
              <BsPlusLg className=" mt-1  text-end " />
            </div>
            <div className="flex p-2 ml-2 w-64  space-x-5 hover:bg-blue-200 cursor-pointer hover:rounded">
              <div className="flex space-x-5 w-48 justify-start">
                <MdOutlineLocalLibrary className="text-xl mt-1" />
                <h1 className="text-xl font-dmsans text-gray-400">Library</h1>
              </div>
              <BsPlusLg className=" mt-1  text-end " />
            </div>
            <div className="flex p-2 ml-2 w-64  space-x-5 hover:bg-blue-200 cursor-pointer hover:rounded">
              <div className="flex space-x-5 w-48 justify-start">
                <PiChalkboardTeacherBold className="text-xl mt-1" />
                <h1 className="text-xl font-dmsans text-gray-400">Staffs</h1>
              </div>
              <BsPlusLg className=" mt-1  text-end " />
            </div>
            <div className="flex p-2 ml-2 w-64  space-x-5 hover:bg-blue-200 cursor-pointer hover:rounded">
              <div className="flex space-x-5 w-48 justify-start">
                <HolidayVillageOutlined className="text-xl mt-1" />
                <h1 className="text-xl font-dmsans text-gray-400">Holiday</h1>
              </div>
              <BsPlusLg className=" mt-1  text-end " />
            </div>
            <div className="flex p-2 ml-2  w-64  space-x-5 hover:bg-blue-200 cursor-pointer hover:rounded">
              <div className="flex space-x-5 w-48 justify-start">
                <FaIndianRupeeSign className="text-xl mt-1" />
                <h1 className="text-xl font-dmsans text-gray-400">Fees</h1>
              </div>
              <BsPlusLg className=" mt-1  text-end" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-full ">
          <div className="flex  w-full  h-16 items-center space-x-3">
            <div className="">
              <Dehaze className=""></Dehaze>
            </div>
            <div className="flex justify-end w-full">
              <div className="flex  w-56 border border-gray-500  justify-center rounded-l ">
                <input
                  className="outline-none hover:outline-none p-1.5 text-gray-500"
                  placeholder="search"
                ></input>
              </div>
              <div className="w-10 border border-gray-500 flex justify-center rounded-r border-l-0 cursor-pointer hover:bg-gray-500">
                <Search className="mt-2 text-gray-400 hover:text-white" />
              </div>
            </div>
            <div
              className="w-48 outline-1 h-14 flex space-x-3 cursor-pointer hover:bg-blue-200 hover:rounded p-2"
              onClick={handleTrue}
            >
              <div class="">
                {" "}
                <div className="items-center gap-4 rounded-full flex  text-end mt-1">
                  <img
                    class="w-10 h-10 rounded-full cursor-pointer"
                    src={image.images}
                    alt="adminDropdown"
                  />
                  <span className="">{localStorage.getItem("xname")}</span>
                </div>
                <div>
                  {isTrue ? (
                    <div class="top-0 bg-white divide-y divide-gray-100 rounded-lg  shadow w-44divide-gray-600 ">
                      <div class="px-4 py-3 text-sm text-gray-900 ">
                        <div>{localStorage.getItem("xname")}</div>
                        <div class="font-medium truncate">
                          {localStorage.getItem("xemail")}
                        </div>
                      </div>
                      <ul
                        class="py-2 text-sm text-gray-600"
                        aria-labelledby="avatarButton"
                      >
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Settings
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Earnings
                          </a>
                        </li>
                      </ul>
                      <div class="py-1">
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-600"
                        >
                          Sign out
                        </a>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="-z-10 m-2 h-full w-full bg-blue-50">
            {/* Home Page */}
            <div className="h-full p-3 space-y-5">
              <Home className="mb-2"/>
              <span className="p-2 text-xl ">Home
              </span>
              <div className="flex justify-between">
                <div>
                  <div className="h-36 rounded-xl  w-64 shadow bg-white p-3 flex flex-col justify-between">
                    <div className="flex justify-between ">
                      <img src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/banner/img1.png"></img>
                      <div className="flex flex-col justify-between ">
                        <span className="items-end  font-bold text-xl ">
                          New Students
                        </span>
                        <span className="items-end w-full text-xl text-green-500 flex justify-end">
                          {numbers.students}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="gap-3">
                        <TrendingUp className="text-green-500" />
                        <span>10% higher then Last Year</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-36 rounded-xl  w-64 shadow bg-white p-3 flex flex-col justify-between">
                  <div className="flex justify-between ">
                    <img src="	https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/banner/img2.png"></img>
                    <div className="flex flex-col justify-between">
                      {" "}
                      <span className="items-end font-bold text-xl">
                        Total Courses
                      </span>
                      <span className="items-end w-full text-xl text-green-500 flex justify-end">
                        {numbers.courses}
                      </span>
                    </div>
                  </div>
                  <div>
                    <TrendingDown className="text-red-500" />
                    <span>5% Lower then Last Year</span>
                  </div>
                </div>
                <div className="h-36 rounded-xl  w-64 shadow bg-white p-3 flex flex-col justify-between">
                  <div className="flex justify-between ">
                    <img src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/banner/img3.png"></img>
                    <div className="flex flex-col justify-between ">
                      {" "}
                      <span className="items-end font-bold text-xl">
                        Total Teachers
                      </span>
                      <span className="items-end w-full text-xl text-green-500 flex justify-end">
                        {numbers.teachers}
                      </span>
                    </div>
                  </div>
                  <div>
                    <TrendingUp className="text-green-500" />
                    <span>12% higher then Last Year</span>
                  </div>
                </div>
                <div className="h-36 rounded-xl  w-64 shadow bg-white p-3 flex flex-col justify-between">
                  <div className="flex justify-between ">
                    <img src="https://www.einfosoft.com/templates/admin/smartangular/source/light/assets/images/banner/img4.png"></img>
                   
                   <div class="flex flex-col justify-between"
                   > <span className="items-end font-bold text-xl">
                      Fees Collection
                    </span>
                  <span className=" w-full text-xl text-green-500 text-end">
                    {numbers.fees}
                  </span>
                  </div>
                  </div>
                  <div>
                    <TrendingUp className="text-green-500" />
                    <span>100% higher then Last Year</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
