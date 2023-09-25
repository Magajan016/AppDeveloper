import React, { useState } from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { ImLinkedin2 } from "react-icons/im";
import { AiFillSkype, AiOutlineArrowRight } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { open, selectUser } from "../../redux/FooterSlice";
import Terms from "../../Pages/Terms";
import Privacy from "../../Pages/Privacy";
import Faq from "../../Pages/Faq";
function Footer() {
  const isPoped = useSelector(selectUser);
  const dispatch =useDispatch();
  return (
<div> 
  <div className={`${isPoped?.viewTerms==="true"?"block":"hidden"}`}>
<Terms/>
  </div>
  <div className={`${isPoped?.viewPrivacy ==="true"?"block":"hidden"}`}>
    <Privacy/>
  </div>
  <div className={`${isPoped?.viewfaq==="true"?"block":"hidden"}`}>
    <Faq/>
  </div>
   <div className="flex flex-col bg-image9  w-screenspace-y-15">
      <div className="flex flex-col b h-auto ">
        <div className="flex justify-evenly items-center">
          <div className="flex space-x-4">
            <div className="">
              {/* <FiPhone className="text-white text-xl " /> */}
              <i class="fa fa-phone text-white text-xl px-4 py-3 rounded-full bg-light-white" aria-hidden="true"></i>
            </div>
            <div className="flex flex-col cursor-pointer">
              <h1 className="text-slate-300">Call us any time:</h1>
              <p className="text-xl text-white font-dmsans">+256 214 203 215</p>
            </div>
          </div>
          <div className="h-20 border-l border-solid border-gray-600 mt-2"></div>
          <div className="flex space-x-4 cursor-pointer">
            <div className="">
            <i class="fa fa-envelope text-white text-xl px-4 py-3 rounded-full bg-light-white" aria-hidden="true"></i>

            </div>
            <div className="flex flex-col cursor-pointer">
              <h1 className="text-slate-300">Email us 24/7 hours:</h1>
              <p className="text-xl text-white font-dmsans">
                seek@gmail.com
              </p>
            </div>
          </div>
          <div className="h-20 border-l border-solid border-gray-600 mt-2"></div>
          <div className="flex space-x-4 cursor-pointer">
            <div className="">
            <i class="fa fa-location text-white text-xl px-4 py-3 rounded-full bg-light-white" aria-hidden="true"></i>
            </div>
            <div className="flex flex-col">
              <h1 className="text-slate-300">Our University Location:</h1>
              <p className="text-xl text-white font-dmsans">
                147/I, Green Road
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="h-auto  rounded-xl m-6 bg-light ">
          <div className="flex flex-col spae-y-10">
            <div className="flex rounded-xl m-6  justify-evenly ">
              <div className="flex flex-col space-y-5 w-[400px]">
                <h1 className="text-white text-4xl flex space-x-5"><img src="https://res.cloudinary.com/dnghkq7oo/image/upload/v1695549851/logo-icon_ufxeau.svg" className="h-10"></img>SEEK University</h1>
                <p className="text-white text font-normal">
                  Continually optimize backward manufactured products whereas
                  communities negotiate life compelling alignments
                </p>
                <div className="flex flex-col space-y-6">
                  <div>
                    <h1 className="text-white text-2xl font-poppins">
                      FOLLOW US ON:
                    </h1>
                  </div>
                  <div className="flex justify-evenly">
                    <div className=" ">
                      {" "}
                      {/* <FaFacebookF className=" p-10 bg-white" /> */}
                      <i class="fab fa-facebook-f text-slate-50 hover:text-white bg-light-white px-4 py-3 rounded-full cursor-pointer hover:bg-blue-500"></i>
                    </div>
                    <div className=" ">
                      {/* <BiLogoInstagramAlt className="text-slate-700 hover:text-white text-xl mt-2 ml-2" />
                       */}
                      <i class="fab fa-instagram text-slate-50 hover:text-white bg-light-white px-3 py-3 rounded-full cursor-pointer hover:bg-blue-500"></i>
                    </div>
                    <div className="">
                      <i class="fab fa-linkedin-in text-slate-50 hover:text-white bg-light-white px-3 py-3 rounded-full cursor-pointer hover:bg-blue-500"></i>
                    </div>
                    <div className="">
                      <i class="fa-brands fa-youtube  text-slate-50 hover:text-red-500 bg-light-white px-3 py-3 rounded-full cursor-pointer hover:bg-blue-500"></i>
                    </div>
                    <div>
                      <i class="fa-brands fa-twitter  text-slate-50 hover:text-white bg-light-white px-3 py-3 rounded-full cursor-pointer hover:bg-blue-500"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-5">
                <div>
                  <h1 className="text-white text-2xl">Admission</h1>
                </div>
                <div className="list-none text-white  space-y-2 cursor-pointer">
                  <li className="hover:text-blue-600">Admission Information</li>
                  <li className="hover:text-blue-600">How to apply</li>
                  <li className="hover:text-blue-600">Learn Entry</li>
                </div>
              </div>
              <div className="space-y-5">
                <div>
                  {" "}
                  <h1 className="text-white text-2xl">Quick Links</h1>
                </div>
                <div className="text-white list-none  space-y-2 cursor-pointer ">
                  <li className="hover:text-blue-600">AICTE Approval</li>
                  <li className="hover:text-blue-600">Infrastructure</li>
                  <li className="hover:text-blue-600">Rules and Regulations</li>
                  <li className="hover:text-blue-600">Placements</li>
                  <li className="hover:text-blue-600">Research</li>
                  <li className="hover:text-blue-600">Program </li>
                  <li className="hover:text-blue-600">AICTE Approval</li>
                </div>
              </div>
              <div className="w-80 space-y-5">
                <h1 className="text-white text-2xl">Get In touch</h1>
                <div className="space-y-5">
                  <p className="text-white ">
                    Subscribe our newsletter to get our latest Update & news
                  </p>
                  <div className="flex w-full border border-slate-100 hover:border-blue-500 rounded">
                    <input
                      type="text"
                      placeholder="Enter Email"
                      className="placeholder:text-white focus:outline-none bg-transparent p-2 w-72"
                    ></input>
                    <FiMail className="text-blue-600 text-xl mt-2 cursor-pointer" />
                  </div>
                  <div>
                    <button className="px-4 py-2 flex z-0 bg-blue-500 text-white rounded-md hover:bg-gray-500 transform hover:scale-110 transition-all duration-300 ease-in-out">
                      Subscribe Now
                      <AiOutlineArrowRight className=" text-xl mt-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-10 mb-7">
            <div className="">
              <hr className="w-full bg-black "></hr>
            </div>
            <div className=" flex justify-evenly  text-slate-400   ">
              <h1>copyright <i class="fa fa-copyright text-white" aria-hidden="true"></i> 2023 <span className="text-blue-400 cursor-pointer">COLLEGE</span> All rights Reserved</h1>
              <h1 className="hover:text-blue-400 cursor-pointer " onClick={()=>dispatch(open({viewfaq:"true"}))}>FAQ</h1>
              <h1 className="hover:text-blue-400 cursor-pointer " onClick={()=>dispatch(open({viewTerms:"true"}))} >Terms and Conditions</h1>
              <h1 className="hover:text-blue-400 cursor-pointer" onClick={()=>dispatch(open({viewPrivacy:"true"}))}>Privacy Policy</h1>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  
  );
}

export default Footer;
