import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegClock, FaUser } from "react-icons/fa";
import { BiLogoFacebook, BiLogoYoutube } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineArrowRight, AiOutlineLinkedin } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/FooterSlice";
import { useEffect, useRef, useState } from "react";
import Login1 from "./Applocationform/Login1";
import Login from "../../Pages/Login";
function Navbar() {
  const nav = useNavigate();

  const isPoped = useSelector(selectUser);
  const dispatch = useDispatch();

  const [showLogin1, setShowLogin1] = useState(false);
  const addRef = useRef();
  const addRef1 = useRef();
  const handleClickOutsie = (event) => {
    if (addRef1.current && !addRef1.current.contains(event.target))
      setShowLogin1(false);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsie);
  }, []);
  return (
    <div className="bg-blue-500 ">
      <div className="">
        {showLogin1 && (
          <Login1
            setShowLogin1={setShowLogin1}
            addRef1={addRef1}
            showLogin1={showLogin1}
          />
        )}
      </div>
      <div class="sticky top-0 flex flex-col h-32 z-50  w-full ">
        <div className="flex w-full p-2">
          <div className="flex  divide-x w-full justify-center items-center divide-slate-400 list-none">
            <li className="flex items-center">
              <IoCallOutline className=" text-white mt-1 mr-1" />
              <span className="flex space-x-4 hover:text-black cursor-pointer text-white">
                (+91) 9363339028
              </span>
            </li>

            <li className=" ml-5">
              <span className="flex space-x-4 text-white">
                <MdOutlineMailOutline className="mt-1.5 mr-1 ml-4" />
                seek@gmail.com
              </span>
            </li>
            <li className="mr-5 ml-4">
              <span className="flex space-x-4 text-white">
                <FaRegClock className="mt-1.5 mr-1 ml-4" />
                Mon-Sat: 8:00 - 16:30
              </span>
            </li>
          </div>
          <div className="flex space-x-4 w-full list-none justify-end items-center mr-5">
            <li>
              <span className="text-white ">Follow Us : </span>
            </li>
            <li className="text-white cursor-pointer text-xl">
              <BiLogoFacebook />
            </li>
            <li className="text-white cursor-pointer text-xl">
              <GrInstagram />
            </li>
            <li className="text-white cursor-pointer text-xl">
              <BsTwitter />
            </li>
            <li className="text-white cursor-pointer text-2xl">
              <AiOutlineLinkedin />
            </li>
            <li className="text-white cursor-pointer text-2xl">
              <BiLogoYoutube />
            </li>
            <li className="text-white cursor-pointer text-bold text-xl">
              <FaUser />
            </li>
            <li
              className="text-white cursor-pointer text-bold hover:text-red-400"
              onClick={() => setShowLogin1(true)}
            >
              Login / Register
            </li>
          </div>
        </div>
        <div className="flex space-x-44 items-center border-2 rounded-tl-full  h-full bg-white  justify-center">
          <div className="text-2xl p-4 justify-center font-bold s flex font-display shadow-sm  space-x-4  text-black">
            <div>
              <img
                src="https://res.cloudinary.com/dnghkq7oo/image/upload/v1695549851/logo-icon_ufxeau.svg"
                className="h-10"
              ></img>
            </div>{" "}
            <div>SEEK</div>
          </div>

          <div className="flex justify-evenly  space-x-20">
            <div class="text-xl   cursor-pointer p-2">
              <button className="hover:text-blue-600" onClick={() => nav("/")}>
                {" "}
                Home
              </button>
            </div>
            <div className="text-xl   cursor-pointer p-2">
              <button
                className="hover:text-blue-600"
                onClick={() => nav("/about")}
              >
                {" "}
                About
              </button>
            </div>
            <div class="text-xl  cursor-pointer p-2">
              <button
                className="hover:text-blue-600"
                onClick={() => nav("/course")}
              >
                {" "}
                Course
              </button>
            </div>
            <div class="text-xl  cursor-pointer p-2">
              <button
                className="hover:text-blue-600"
                onClick={() => nav("/contact")}
              >
                {" "}
                Contact
              </button>
            </div>
            <div class="text-xl  cursor-pointer p-2">
              <button className="hover:text-blue-600"> Blog</button>
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
    </div>
  );
}

export default Navbar;
