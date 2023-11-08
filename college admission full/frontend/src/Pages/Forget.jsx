import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Forget() {
  const [error, setErrors] = useState({});
  const [forgot, setForgot] = useState({
    email1: "",
  });
  const [isTrue, setIsTrue] = useState(true);
  const [isFalse, setIsFalse] = useState(false);
  const handleReset = (e) => {
    e.preventDefault();
    const errorValidation = {};
    if (!forgot.email1.trim()) {
      errorValidation.email1 = "Email is required";
      toast.error("Enter email");
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(forgot.email1)
    ) {
      errorValidation.email1 = "Email is invalid";
    }
    setErrors(errorValidation);
    if (Object.keys(errorValidation).length === 0) {
      toast.success("Successful");
      setIsTrue(false);
    }
  };
  const handleFalse = (e) => {
    e.preventDefault();
    setIsFalse(true);
  };
  const handlePassword = (e) => {
    setForgot({ ...forgot, [e.target.id]: e.target.value });
  };
  return (
    <div className="fixed top-0 flex justify-center bg-black bg-opacity-90 z-[100] h-screen w-[98.9vw]">
      <div className="relative flex flex-col w-[55rem] h-[80%] p-4 top-[5%] m-6 space-y-8  hover:border-yellow-600 bg-white  bg-opacity-100 shadow-2xl rounded-2xl md:flex-row md:space-y-0 space-x-5">
        <form className="bg-gradient-to-r from-cyan-500 to-cyan-400  border w-[25rem] p-9 space-y-5">
          <div className="flex  items-center justify-center text-white font-poppins text-4xl space-x-3 ">
            {" "}
            <img
              src="https://res.cloudinary.com/dnghkq7oo/image/upload/v1695549851/logo-icon_ufxeau.svg"
              className="h-10"
            ></img>
            <div>SEEK </div>
          </div>
          <h1 className="flex  w-full justify-center font-bold text-3xl text-white">
            Welcome Back
          </h1>
          <h1 className="flex  w-full justify-center gap-2 text-xl text-white">
            We are <span className="text-blue-700">HAPPY </span> to see you back{" "}
          </h1>
          <h1 className="text-white text-2xl text-center ">
            <span className="text-3xl text-blue-700">SEEK </span> Knowledge from
            the Cradle to the Grave
          </h1>
        </form>
        {isFalse ? (
          <div className="w-96 flex flex-col space-y-5 justify-center">
            <h1 className="font-bold text-2xl font-mono text-cyan-500 text-center">
              Create New Password
            </h1>
            <h1 className="text-center">
              Your new password must be different from previous used passwords.
            </h1>
            <div className="flex flex-col space-y-3">
              <label className="text-xl">New Password</label>
              <input
                className="px-3 py-2 w-full outline-cyan-400 outline outline-2 rounded hover:outline-cyan-500"
                placeholder="password"
                type="text"
              ></input>
              <label className="text-xl">Confirm Password</label>
              <input
                className="px-3 py-2 w-full outline-cyan-400 outline outline-2 rounded hover:outline-cyan-500"
                placeholder="re-enter password"
                type="text"
              ></input>
            </div>
            <div>
              <button className="bg-blue-500 rounded w-full px-3 py-2 text-white text-xl font-bold hover:bg-blue-600 ">
                Reset Password
              </button>
            </div>
          </div>
        ) : (
          <form className="flex  space-y-5 justify-center w-96">
            <Toaster />
            <div className="flex flex-col space-y-5">
              <h1 className="text-2xl flex justify-center w-full text-cyan-400">
                Forgot Your Password ?
              </h1>
              <h1 className="text-center">
                We get it, stuff happens. Just enter your email address below
                and we'll send you a link to reset your password!
              </h1>
              <div className="flex flex-col space-y-4">
                <label>Email</label>
                {error.email1 && (
                  <span className="text-red-500">{error.email1}</span>
                )}
                <input
                  onChange={handlePassword}
                  className={`${
                    error.email1 ? "border-red-400" : "border-cyan-400"
                  } w-full p-2 text-gray shadow text-sm focus:outline-none rounded border-2 border-white leading-tight focus:shadow-outline`}
                  placeholder="Enter Email Address"
                  id="email1"
                  type="text"
                ></input>
                {isTrue ? (
                  <button
                    className="bg-red-400 hover:bg-red-500 text-white font-bold p-2 rounded "
                    onClick={handleReset}
                  >
                    Reset Password
                  </button>
                ) : (
                  <div className="w-96">
                    <div className="w-96 space-y-5">
                      <h1 className="text-xl text-center ">
                        Verify your Email
                      </h1>
                      <p></p>
                      <div className=" flex justify-evenly ">
                        <input
                          className="h-12 rounded w-12 border text-center outline-none hover:outline-none"
                          type="text"
                          maxLength="1"
                          pattern="[0-9]"
                          inputMode="numeric"
                          autoComplete="one-time-code"
                        ></input>
                        <input
                          className="h-12 w-12 rounded border text-center outline-none hover:outline-none"
                          type="text"
                          maxLength="1"
                          pattern="[0-9]"
                          inputMode="numeric"
                          autoComplete="one-time-code"
                        ></input>
                        <input
                          className="h-12 w-12 rounded border text-center outline-none hover:outline-none"
                          type="text"
                          maxLength="1"
                          pattern="[0-9]"
                          inputMode="numeric"
                          autoComplete="one-time-code"
                        ></input>
                        <input
                          className="h-12 w-12 rounded border text-center outline-none hover:outline-none"
                          type="text"
                          maxLength="1"
                          pattern="[0-9]"
                          inputMode="numeric"
                          autoComplete="one-time-code"
                        ></input>
                      </div>
                      <div className="flex justify-evenly ">
                        <button
                          className="w-20 bg-teal-500 h-10 rounded  font-bold hover:bg-teal-800 text-white"
                          onClick={handleFalse}
                        >
                          Verify
                        </button>
                        <h1 className="hover:text-teal-700 text-teal-400 font-poppins font-bold mt-3 cursor-pointer">
                          Resend OTP
                        </h1>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Forget;
