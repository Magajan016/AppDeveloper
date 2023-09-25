import React from "react";

function HomeNavbar() {
  return (
    <div>
      <div></div>
      <div className="flex space-x-44 items-center border-2   h-full bg-white  justify-center">
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
            <button className="hover:text-blue-600"> Home</button>
          </div>
          <div className="text-xl   cursor-pointer p-2">
            <button className="hover:text-blue-600"> About</button>
          </div>
          <div class="text-xl  cursor-pointer p-2">
            <button className="hover:text-blue-600"> Course</button>
          </div>
          <div class="text-xl  cursor-pointer p-2">
            <button className="hover:text-blue-600"> Instructor</button>
          </div>
          <div class="text-xl  cursor-pointer p-2">
            <button className="hover:text-blue-600"> Blog</button>
          </div>
          <div class="bg-blue-600 rounded cursor-pointer hover:bg-slate-700 hover:text-white text-black p-2">
            <button className="flex   justify-evenly font-poppins mt-1">
              {" "}
              Apply Now{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeNavbar;
