import React, { useState } from "react";
import Navbar from "../Components/User/Navbar";
import { SlPhone } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Message } from "@mui/icons-material";
import Footer from "../Components/User/Footer";

function Contact() {
  const [isColor1, setIsColor1] = useState(false);
  const [isColor2, setIsColor2] = useState(false);
  const [isColor3, setIsColor3] = useState(false);
  return (
    <div className="w-[98.9vw] h-auto">
      <Navbar />
      <div className=" bg-no-repeat ">
      <div className="space-y-10">
        <div className=" bg-image5  bg-no-repeat bg-opacity-50 ">
          <div className="bg-darkpurple  bg-opacity-70 h-[400px]">
            <div className="flex flex-col space-y-9 flex-wrap justify-center h-full content-center">
              <h1 className=" text-5xl font-bold text-white  ">CONTACT US</h1>
              <h1 className="text-white text-center text-2xl">
                Home{" "}
                <i className="fa fa-arrow-circle-right text-xl text-white"></i>{" "}
                Contact Us
              </h1>
            </div>
          </div>
        </div>
        <div className="flex  flex-wrap justify-center w-full rounded-xl h-[600px] ">
          <div className=" h-[90%] w-[90%] top-[5%] ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.4417308507!2d76.88483288061994!3d11.01412629684133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1695533276112!5m2!1sen!2sin"
              className=" h-[100%] w-[100%] opacity-60 bg-slate-50"
              style={{ background: "FFFFFF" }}
            ></iframe>
          </div>
        </div>
        <div className="flex flex-wrap  w-full h-[600px]  rounded justify-center">
          <div className="w-[90%] flex left-[5%] space-x-10 space-y-5">
            <div className="space-y-5 w-[35%]">
              <div className="w-full space-y-4 px-2">
                <h1 className="text-darkpurple text-4xl font-productsansb">
                  Have Any Questions ?
                </h1>
                <hr className="w-[15%] h-1 rounded-lg bg-blue-600"></hr>
                <p>
                  Have a inquiry or some feedback for us ? Fill out the form
                  below to contact our team.
                </p>
              </div>
              <div
                className=" flex  p-3   pl-4 space-x-8 rounded-xl shadow-sm w-full border cursor-pointer border-slate-100  "
                onMouseEnter={() => setIsColor1(true)}
                onMouseLeave={() => setIsColor1(false)}
              >
                <div
                  className={` ${
                    isColor1 ? "bg-blue-600 text-white" : ""
                  } p-5 mb-1 rounded-xl cursor-pointer hover:bg-blue-500 h-16 bg-blue-50`}
                >
                  {/* <i className="fa fa-location-dot text-xl text-blue-500"></i> */}
                  <IoLocationOutline
                    className={`${
                      isColor1 ? "text-white" : ""
                    } text-3xl   text-blue-800`}
                  />
                </div>
                <div className="w-full p-4 ">
                  <h1 className="text-black text-xl font-bold font-productsansb">
                    Our Address
                  </h1>
                  <p>2960 Hiltona Street Victoria Road, New York , Canada</p>
                </div>
              </div>
              <div
                className="p-3 rounded-xl flex  pl-4 space-x-8 w-full border cursor-pointer border-slate-100 "
                onMouseEnter={() => setIsColor2(true)}
                onMouseLeave={() => setIsColor2(false)}
              >
                <div
                  className={`p-5 rounded-xl  hover:bg-blue-500 h-16 hover:text-white bg-blue-50 ${
                    isColor2 ? "bg-blue-600" : ""
                  }`}
                >
                  {/* <i className="fa fa-phone text-xl text-blue-500"></i>
                   */}
                  <SlPhone
                    className={`${
                      isColor2 ? "text-white" : ""
                    } text-3xl hover:text-white text-blue-800`}
                  />
                </div>
                <div className="w-full p-4">
                  <h1 className="text-darkpurple text-xl font-bold font-productsansb">
                    Phone Number
                  </h1>
                  <p>Mobile: (+91) - 7563 - 4675</p>
                  <p>Phone: (+91) - 7563 - 4675</p>
                </div>
              </div>
              <div
                className="p-3 rounded-xl flex   space-x-8  shadow-sm w-full border cursor-pointer border-slate-100"
                onMouseEnter={() => setIsColor3(true)}
                onMouseLeave={() => setIsColor3(false)}
              >
                <div
                  className={`${
                    isColor3 ? "bg-blue-600" : ""
                  } p-5 rounded-xl  h-16 bg-blue-50`}
                >
                  {/* <i className="fa fa-clock text-xl text-blue-400"></i>
                   */}
                  <AiOutlineClockCircle
                    className={`${
                      isColor3 ? "text-white" : ""
                    } text-3xl  mb-2 text-blue-800`}
                  />
                </div>
                <div className="p-4">
                  <h1 className="text-black text-xl font-bold font-productsansb">
                    Hours of Operation
                  </h1>
                  <p>Monday - Friday: 09:00 am - 06:00 pm</p>
                  <p>Saturday - Sunday: 09:00 am - 01:00 pm</p>
                </div>
              </div>
            </div>
            <div className="absolute top-[140%] left-[37%] ">
              <div className=" px-10 w-[750px]  h-[760px] justify-evenly flex flex-col border bg-image6 bg-cover rounded-xl space-y-5 ">
                <h1 className="text-blue-600 text-xl">Contact with us!</h1>
                <p className="text-5xl font-bold font-dmsans">Get in Touch</p>
                <hr className="h-1 bg-blue-500 w-20"></hr>
                <p>
                  If you have any questions or feedback, please feel free to
                  send us a message using the form below:
                </p>
                <div className=" space-y-10">
                  <div className="flex justify-start space-x-10 ">
                    <div className="p-4 w-full outline-none hover:outline-none h-16 bg-white border rounded">
                      <input
                        placeholder="Your Name*"
                        className=" placeholder:text-slate-700 w-full outline-none hover:outline-none"
                      ></input>
                    </div>
                    <div className="p-4 w-full outline-none hover:outline-none h-16 bg-white border rounded">
                      <input
                        placeholder="Email Address*"
                        className=" w-full placeholder:text-slate-700 outline-none hover:outline-none "
                      ></input>
                    </div>
                  </div>
                  <div className="flex justify-start space-x-10">
                    <div className="p-4 w-full outline-none hover:outline-none h-16 bg-white border rounded">
                      <input
                        placeholder="Select Course*"
                        className=" w-full placeholder:text-slate-700 outline-none hover:outline-none "
                      ></input>
                    </div>
                    <div className="p-4 w-full outline-none hover:outline-none h-16  bg-white border rounded">
                      <input
                        placeholder="Phone Number*"
                        className="  w-full placeholder:text-slate-700 outline-none hover:bg-white hover:outline-none rounded"
                      ></input>
                    </div>
                  </div>
                  <textarea
                    placeholder="Write your message*"
                    className=" p-4 w-full placeholder:text-slate-700 hover:outline-none focus:outline-none  h-24 rounded"
                  ></textarea>
                  <div
                    class="group relative flex h-12 items-center space-x-2
                overflow-hidden rounded bg-gradient-to-r from-blue-700
                to-blue-700 px-6 text-white font-bold hover:text-white w-48 hover:to-slate-600"
                  >
                    <span>Send Message </span>
                    <div class="flex translate-x-3 items-center -space-x-3">
                      <div class="h-[1.6px] w-2.5 origin-left scale-x-0 rounded bg-white transition duration-300 group-hover:scale-x-100"></div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 -translate-x-2 stroke-white transition duration-300 group-hover:translate-x-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
