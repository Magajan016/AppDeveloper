import { FcGoogle } from "react-icons/fc";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiMiniKey } from "react-icons/hi2";
import { userLogin } from "../../../Service/Api";

function Login1({addRef1,showLogin1,setShowLogin1}) {
  const [isAdmin, setIsAdmin] = useState("");
  const [isUser, setIsUser] = useState("");
  const nav = useNavigate();
  const [error, setError] = useState({});
  const [login, setLogin] = useState({
    email: "",
    password: "",
    role:"",
  });
  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  
  const handleClick = async (e) => {
    e.preventDefault();
    const res = await userLogin(login);
    if((res.status)==200 && (res.data.role)=="USER"){
          console.log(res.data);
          localStorage.setItem('Token', res.data.token);
          localStorage.setItem('Role',res.data.role);
          const getuid = (res.data.uid);
          console.log(getuid);
          localStorage.setItem('xname', res.data.name);
          localStorage.setItem('xemail', res.data.email);
          toast.success(`Welcome ${res.data.name} !`,
          {
            position:"bottom-right",
            autoClose:1000,
            hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
          }
          );
          setTimeout(()=>{
            nav('/dashboard');
          },1500);
    }
    let validationErrors1 = {};
    if (!login.email.trim()) {
      validationErrors1.email = "Enter email";
      toast.error("Enter Email");
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(login.email)
    ) {
      validationErrors1.email = "please enter valid email";
    }
    if (!login.password.trim()) {
      validationErrors1.password = "Enter password";
      toast.error("Enter password");
    }
    setError(validationErrors1);
    if (Object.keys(validationErrors1).length === 0) {
      toast.success("Login Successful");
      nav("/dashboard");
    }
  };
  return (
    <div className="fixed top-0 flex justify-center bg-black bg-opacity-90 z-[100] h-screen w-[98.9vw]">
      <div className="relative flex flex-col w-[55rem] h-[80%] p-4 top-[5%] m-6 space-y-8  hover:border-yellow-600 bg-white  bg-opacity-100 shadow-2xl rounded-2xl md:flex-row md:space-y-0 space-x-5" ref={addRef1}>
        <form className="bg-gradient-to-r from-cyan-500 to-blue-500  border w-[25rem] p-9 space-y-5">
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
          <h1 className="text-white text-2xl text-center "><span className="text-3xl text-blue-700">SEEK </span> Knowledge from the Cradle to the Grave</h1>
        </form>
        <form className="flex flex-col items-center justify-center  space-y-5 p-5  rounded">
          <h1 className="flex  w-full justify-center font-bold text-3xl text-blue-600">
            Login in to your Account
          </h1>
          {/* <h1 className="flex  w-full justify-center gap-2">
            We are <span className="text-blue-600">HAPPY </span> to see you back{" "}
          </h1> */}
          <div className="flex justify-evenly w-96">
            <div name="role"
              className={` p-2 w-32 border rounded flex justify-center cursor-pointer  ${
                isAdmin=="ADMIN" ? "bg-blue-600 text-white" : "bg-white"
              } `}
              onClick={()=>setIsAdmin("ADMIN",login.role("admin"))}
            >
              <i className="fa fa-select text-black" />
              Admin
            </div>
            <div name="role"
              className={` p-2 w-32 border rounded flex justify-center cursor-pointer ${
                isAdmin=="USER" ? "bg-blue-600 text-white" : "bg-white"
              } `}
              onClick={()=>setIsAdmin("USER",login.role("user"))}
            >
              User
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label>Email </label>
            <div className="flex w-96 border rounded">
              <i class="fa fa-lock w-12 mt-1.5  pl-3 text-gray-400 text-xl"></i>
            <input
              className=" p-2 w-full rounded-r border-l border-slate-200 outline-none  hover:"
              type="text"
              id="email"
              name="email"
              onChange={handleChange}
            ></input>
            </div>
            {error.email && <span className="text-red-500">{error.email}</span>}
            <label>Password</label>
            <div className="flex w-96 border rounded">  <HiMiniKey className="w-12 mt-1.5 text-3xl  text-gray-400"/>         <input
              className="w-full   p-2  rounded-r border-l border-slate-200  outline-none hover:outline-none  "
              type="text"
              id="password"
              name="password"
              onChange={handleChange}
            ></input>
            </div>

            {error.password && (
              <span className="text-red-500">{error.password}</span>
            )}

            <div className="flex space-x-24">
              <div className="flex space-x-2">
                <input className="" type="checkbox"></input>
                <label>Remember Me</label>
              </div>
              <label className="hover:underline cursor-pointer hover:text-blue-600" onClick={()=>nav("/forget")}>
                Forgot Your Password?
              </label>
            </div>
          </div>
          <button
            className="w-96  p-2 rounded hover:bg-blue-900 bg-blue-600 text-xl border hover:text-white"
            onClick={handleClick}
          >
            Sign in{" "}
          </button>
          <div className="flex space-x-2">
            <hr className="w-40 mt-3"></hr>
            <h1 className="">or</h1>
            <hr className="w-40 mt-3"></hr>
          </div>
          <div className="p-2  border rounded w-full flex justify-center space-x-8 cursor-pointerhover:bg-blue-600  hover:bg-blue-600 hover:text-white cursor-pointer" onClick={()=>nav('/signup')}>
            <FcGoogle className="text-2xl" /> <div>Sign up</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login1;
