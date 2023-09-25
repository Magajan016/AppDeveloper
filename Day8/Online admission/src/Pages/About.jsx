import React from "react";
import Navbar from "../Components/User/Navbar";
import { PiNotebookBold } from "react-icons/pi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Footer from "../Components/User/Footer";

function About() {
  return (
    <div className="w-[98.9vw]">
      <Navbar/>
      <div className="space-y-10">
        <div className="bg-image5 bg-no-repeat bg-cover bg-opacity-60">
          <div className="flex space-y-10 bg-blue-950  h-[400px] items-center bg-opacity-50 w-full">
            <div className="flex flex-col w-full justify-center items-center space-y-5 ">
              <h1 className="text-white text-5xl font-display">ABOUT US</h1>
              <h1 className="text-white text-xl">
                Home{" "}
                <i className="fa fa-arrow-circle-right text-xl text-white"></i>{" "}
                About us
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-2 items-center">
          <div className="flex ">
            <PiNotebookBold className="text-blue-600 text-2xl" />
            <h1 className="font-bold text-blue-500">WHAT WE DO</h1>
          </div>
          <div className="flex">
            <h1 className="text-4xl font-poppins">Education Tailored to You</h1>
          </div>
        </div>
        <div className=" bg-image10 w-full ">
          {/* Start  */}
          <div className="flex space-x-10 justify-evenly p-4">
            <div className="flex space-x-8">
              <img
                src="https://res.cloudinary.com/dnghkq7oo/image/upload/v1695574942/about_5_1_s6p4u5.png"
                className=" rounded-xl "
              ></img>
              <div className="space-y-10">
                <div className="  flex flex-col py-10 w-56 border bg-blue-700 rounded-xl">
                  <h1 className="text-4xl text-center font-poppins text-white ">
                    10K+
                  </h1>
                  <h1 className="text-white text-2xl font-poppins text-center">
                    Studnets Active Our Classes
                  </h1>
                </div>
                <img
                  src="https://res.cloudinary.com/dnghkq7oo/image/upload/v1695574942/about_5_2_mfumgi.png"
                  className=" items-center  rounded-xl h-auto"
                ></img>
              </div>
              <div className="flex flex-col space-y-8">
                <div className="flex space-x-4">
                  <PiNotebookBold className="text-blue-600 text-2xl" />
                  <h1 className="font-bold text-blue-500 text-xl font-display">
                    About our University
                  </h1>
                </div>
                <div>
                  <h1 className="text-4xl font-poppins font-bold">
                    Welcome to Seek University
                  </h1>
                </div>
                <div>
                  <p>
                    Collaboratively simplify user friendly networks after
                    principle centered coordinate effective methods of
                    empowerment distributed niche markets pursue market
                    positioning web-readiness after resource sucking
                    applications.
                  </p>
                </div>
                <div className="flex space-x-5">
                    <img src="https://res.cloudinary.com/dnghkq7oo/image/upload/v1695580839/about-grid-icon2-1_cmkihd.svg"></img>
                    <div className="flex flex-col space-y-2"><h1 className="text-xl font-bold">Undergraduate Education</h1><span className="text-slate-400">With flexible courses</span></div>
                    <img src="https://res.cloudinary.com/dnghkq7oo/image/upload/v1695580839/about-grid-icon2-2_tntx5p.svg" className=""></img>
                    <div className="flex flex-col space-y-2"><h1 className="text-xl font-bold">Postgraduate Education</h1><span className="text-slate-400">Study flexibly</span></div>
                </div>
                <div className="flex space-x-8">
                    <img src="https://res.cloudinary.com/dnghkq7oo/image/upload/v1695581547/image2_xgusqq.jpg " className="h-24 w-48 rounded-xl"></img>
                    <div className="flex flex-col space-y-2">
                    <div className="flex space-x-3"><BsFillCheckCircleFill class="fa fa-check text-blue-600 mt-2"/> <h1>Get access to all courses</h1></div>
                    <div className="flex space-x-3"> <BsFillCheckCircleFill class="fa fa-check text-blue-600 mt-2"/><h1>Events are conducted</h1></div>
                    <div className="flex space-x-3"><BsFillCheckCircleFill class="fa fa-check text-blue-600 mt-2"/><h1>Find the right course to learn</h1></div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
