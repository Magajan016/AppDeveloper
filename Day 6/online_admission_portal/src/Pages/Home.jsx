import React from "react";
import Header from "../Components/User/Header";
import Nav from "../Components/User/Nav";
import Navbar from "../Components/User/Navbar";
import { AiOutlineArrowRight,AiOutlineLinkedin} from "react-icons/ai";

function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="bg-slate-600">
        <div className="flex  relative justify-between w-full h-screen bg-cover bg-no-repeat  bg-image1">
          <div className=" flex justify-between pt-32 pl-10 ">
            <div className=" items-center justify-center space-y-10 w-[43rem]">
              <p className="text-2xl text-white">LEARN FROM TODAY</p>
              <p className="text-2xl text-white">
                College Leads To A Brighter{" "}
                <span className="text-blue-600">Future</span>
              </p>
              <p className="text-2xl text-white">
                {" "}
                Education can be thougtht of as the transmission of the values
                and accumulated knowledge of a society. In the sense, it is
                equivalent
              </p>
              <button className="flex space-x-3 text-white bg-blue-700 p-3 rounded hover:bg-slate-950">Get Started <AiOutlineArrowRight className="h mt-1"/></button>

            </div>
            <div className=" flex">
              <img
                src="https://res.cloudinary.com/dnghkq7oo/image/upload/v1695378108/hero_thumb_1_2_wv0gbc.png"
                className="opacity-100 "
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
