import React from "react";

const Sidebar = () => {
  let uemail = localStorage.getItem('xemail');
  return (
    <div className="w-[98vw] h-[10%] shadow rounded m-2 mr-1 shadow-slate-100 border border-slate-200">
      <div className="p-5 h-[100%] flex space-x-10">
        <div className="flex gap-7 ml-2 justify-start">
          <svg
            id="toggleSidebarMobileHamburger"
            class="YIUegm7fh_CpJbivTu6B MnxxlQlR1H0xJuMEE8Yr h-7 text-gray-700 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <img
            src="https://res.cloudinary.com/dnghkq7oo/image/upload/v1695549851/logo-icon_ufxeau.svg"
            className="h-10"
          ></img>
          <h1 className="text-center  font-bold text-2xl font-dmsans font[1.5rem]">
            Seek
          </h1>
          <div className="p-2 w-96 h-10 outline outline-1 rounded outline-gray-400 flex gap-2 hover:outline-blue-600 hover:outline-2">
            <svg
              class="YIUegm7fh_CpJbivTu6B MnxxlQlR1H0xJuMEE8Yr h-6 text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <input
              className="outline-none "
              type="text"
              placeholder="Search"
            ></input>
          </div>
        </div>
        <div className="flex  justify-end w-full ">
         
          <div className="flex space-x-5">
            <div>
              <svg
                class="YIUegm7fh_CpJbivTu6B MnxxlQlR1H0xJuMEE8Yr h-6 text-gray-500 mt-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
              </svg>
            </div>
            <div>
              <svg
                class="YIUegm7fh_CpJbivTu6B MnxxlQlR1H0xJuMEE8Yr h-6 text-gray-500 mt-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
            </div>
            <div>
              <svg
                id="theme-toggle-dark-icon"
                class="ADSeKHR1DvUUA48Chci_ rxe6apEJoEk8r75xaVNG h-6 text-gray-500 mt-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            </div>

            <div class="relative w-10 h-10 bg-gray-400 rounded-full ml-3">
              <svg
                class=" w-10 h-8 text-gray-100 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg> 
              
            </div>
            <div><p className="text-2xl font-dmsans">{uemail}</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
