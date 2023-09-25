import React from "react";
import Header from "../Components/User/Header";
import Nav from "../Components/User/Nav";
import Navbar from "../Components/User/Navbar";
import { AiOutlineArrowRight, AiOutlineLinkedin } from "react-icons/ai";
import Footer from "../Components/User/Footer";
import { PiNotebookBold } from "react-icons/pi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const [isColor1, setIsColor1] = useState(false);
  const nav = useNavigate();
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="space-y-16">
        <div className="bg-image4 bg-opacity-60 ">
          <div className="flex  relative justify-between w-full h-screen bg-cover bg-no-repeat bg-opacity-40 bg-darkpurple">
            <div className=" flex justify-between pt-32 pl-10 ">
              <div className=" items-center justify-center space-y-10 w-[43rem] ">
                <p className="text-2xl text-white animate-bounce duration-75 ">
                  LEARN FROM TODAY
                </p>
                <p className="text-2xl text-white animate-bounce duration-100 infinite">
                  Seek University Leads To A Brighter{" "}
                  <span className="text-blue-600">Future</span>
                </p>
                <p className="text-2xl text-white">
                  {" "}
                  Education can be thougtht of as the transmission of the values
                  and accumulated knowledge of a society. In the sense, it is
                  equivalent
                </p>
                <button class="group relative flex h-12 items-center space-x-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-700 to-blue-700 px-6 hover:text-white hover:to-purple-600">
                  <span>Get Started </span>
                  <div class="flex translate-x-3 items-center   -space-x-3">
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
                </button>
              </div>
              <div className=" flex items-center justify-evenly">
                {/* <img
                src="https://res.cloudinary.com/dnghkq7oo/image/upload/v1695378108/hero_thumb_1_2_wv0gbc.png"
                className="opacity-50 mt-10"
              ></img> */}
                <h1 className="flex text-white text-4xl justify-center">
                  Home Page
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div>
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
                    <div className="flex flex-col space-y-2">
                      <h1 className="text-xl font-bold">
                        Undergraduate Education
                      </h1>
                      <span className="text-slate-400">
                        With flexible courses
                      </span>
                    </div>
                    <img
                      src="https://res.cloudinary.com/dnghkq7oo/image/upload/v1695580839/about-grid-icon2-2_tntx5p.svg"
                      className=""
                    ></img>
                    <div className="flex flex-col space-y-2">
                      <h1 className="text-xl font-bold">
                        Postgraduate Education
                      </h1>
                      <span className="text-slate-400">Study flexibly</span>
                    </div>
                  </div>
                  <div className="flex space-x-8">
                    <img
                      src="https://res.cloudinary.com/dnghkq7oo/image/upload/v1695581547/image2_xgusqq.jpg "
                      className="h-24 w-48 rounded-xl"
                    ></img>
                    <div className="flex flex-col space-y-2">
                      <div className="flex space-x-3">
                        <BsFillCheckCircleFill class="fa fa-check text-blue-600 mt-2" />{" "}
                        <h1>Get access to all courses</h1>
                      </div>
                      <div className="flex space-x-3">
                        {" "}
                        <BsFillCheckCircleFill class="fa fa-check text-blue-600 mt-2" />
                        <h1>Events are conducted</h1>
                      </div>
                      <div className="flex space-x-3">
                        <BsFillCheckCircleFill class="fa fa-check text-blue-600 mt-2" />
                        <h1>Find the right course to learn</h1>
                      </div>
                    </div>
                  </div>
                  <button
                    class=" p-2 group relative flex h-12 items-center space-x-2 overflow-hidden rounded w-36 bg-blue-600 text-white hover:to-slate-600"
                    onClick={() => nav("/about")}
                    onMouseEnter={() => setIsColor1(true)}
                    onMouseLeave={() => setIsColor1(false)}
                  >
                    <span>ABOUT MORE</span>
                    <div class="flex translate-x-3 items-center -space-x-3">
                      <div class="h-[1.6px] w-2.5 origin-left scale-x-0 rounded bg-white transition duration-300 group-hover:scale-x-100"></div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class={`h-5 w-5 -translate-x-2 stroke-white  transition duration-300 group-hover:translate-x-0 ${
                          isColor1 ? "stroke-white" : "stroke-white"
                        }`}
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
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div>
          {/* <img src="https://res.cloudinary.com/dnghkq7oo/image/upload/v1695586327/category-arrow_1_qfklti.svg" className="absolute"></img> */}
          <h1>COURSE CATEGORIES</h1>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
