import { useState } from "react"
import {FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import {useNavigate } from "react-router-dom";
import toast, {Toaster} from 'react-hot-toast'
import { userRegister } from "../Service/Api";


const Signup =()=>{
    const nav =useNavigate();
    const[signup,setSignup]=useState({
        email:'',
        name:'',
        password:'',
        confirmpassword:'',
        role:'USER'
    });
  const [errors,setErrors] = useState({})
    const handleChange = (e)=>{
        setSignup({...signup,[e.target.id]:e.target.value})
       
    }
    const handleSubmit =async (e)=>{
        e.preventDefault();
       
        const validationErrors={}
            if(!signup.email.trim()){
                validationErrors.email="email is required";
            }
            else if(!/\S+@\S+\.\S+/.test(signup.email)){
               validationErrors.email="email is invalid";
            }
            if(!signup.name.trim()){
                validationErrors.name="name is required";
            }
            if(!signup.password.trim()){
                validationErrors.password="password is required";
            }
            else if(!signup.password.length>8){
                validationErrors.password="password should be more than 8 characters";
            }
            if(!signup.confirmpassword.trim()){
               validationErrors.confirmpassword="confirm password is required";
            }
            else if(!(signup.confirmpassword === signup.password)){
                validationErrors.confirmpassword="password is invalid";
            }
            setErrors(validationErrors);
            if(Object.keys(validationErrors).length===0){
                const res = await userRegister(signup);
                if(res.data == "User registered successfully" && res.status == 200){
                    toast.success("Signup Successful")
                    nav('/dashboard/login')
                }
            }
        
    }
    return(
        <div className="flex items-center w-full min-h-screen justify-center bg-slate-400">
            <Toaster/>
            <div class="flex flex-row ">

            <form onSubmit={handleSubmit} class="relative flex flex-col m-6 space-y-0 w-[450px] bg-white shadow-2xl rounded-2xl md:flex-row md:space-x-0">
                <div class="flex flex-col p-8 md:p-14">
                <h1 className="text-center text-2xl font-bold font-serif ">Build Your Career</h1>
                    
                    <div className="py-4 justify-between">
                        <label class="mb-2 text-md font-serif">Email:*</label>
                        <input type="text" placeholder="Enter email" 
                        id='email'
                        name="email"
                        value={signup.email}
                        class="w-full rounded  border-slate-600 font-serif hover:bg-slate-400 p-2 hover:placeholder:text-black outline-none"
                        onChange={handleChange} 
                        autoComplete="off"></input>
                        {errors.email && <span class="text-red-500">{errors.email}</span>}
                    </div>
                    <div className="py-4 justify-between">
                        <label class="mb-2 text-md font-serif">Name:*</label>
                        <input type="text" 
                        id='name'
                        placeholder="Enter name" 
                        value={signup.name}
                        name="name"
                        class="w-full rounded border-slate-600 font-serif  hover:bg-slate-400 p-2 hover:placeholder:text-black outline-none "
                        onChange={handleChange} 
                        autoComplete="off"></input>
                        {errors.name && <span class="text-red-500">{errors.name}</span>}

                    </div>
                    <div className="py-4 justify-between">
                        <label class="mb-2 text-md font-serif">Password:*</label>
                        <input type="password" placeholder="Enter password" 
                        id='password'
                        name="password"
                        class="w-full rounded border-slate-600 font-serif hover:bg-slate-400 p-2 hover:placeholder:text-black outline-none"
                        value={signup.password}
                        onChange={handleChange} 
                        autoComplete="off"></input>
                        {errors.password && <span class="text-red-500">{errors.password}</span>}
                        

                    </div>
                    <div className="py-4 justify-between">
                        <label class="mb-2 text-md font-serif">Confirm Password:*</label>
                        <input type="password" placeholder="Enter password" 
                        id='confirmpassword'
                        name="confirmpassword"
                        class="w-full rounded border-slate-600 font-serif hover:bg-slate-400 p-2 hover:placeholder:text-black outline-none"
                        value={signup.confirmpassword}
                        onChange={handleChange} 
                        autoComplete="off"></input>
                        {errors.confirmpassword && <span class="text-red-500">{errors.confirmpassword}</span>}

                    </div>
                    {/* <div className="py-4 justify-between" >
                        <label className="mb-2 text-md">
                            Interested Programs
                        </label>
                        <select name="programs" className="w-full rounded p-1 border-slate-600 hover:bg-slate-400 p-1 hover:placeholder:text-black outline-none" onChange={handleSelectChange}>
                            <option value="">Select</option>
                            <option value="B.E">B.E</option>
                            <option value="B.Sc">B.Sc</option>
                        </select> 
                        {/* {programs === 'custom' && } */}
                    {/* </div> */} 
                    {/* <div class="flex py-4 justify-content">
                    <input type="checkbox" name="ch" id="ch"></input>
                       <label className="text-md" >I{" "}<span>agree to the{" "}</span>
                       <span class="text-blue-400 hover:underline cursor-pointer">terms{" "}</span>
                       <span >and{" "}</span>
                       <span class="text-blue-400 hover:underline cursor-pointer">condition{" "}</span>
                       </label>

                    </div> */}
                    <button class="w-full bg-black text-white p-2 rounded-lg mt-5
                 font-bold font-serif hover:text-black hover:bg-slate-400 " type="submit">
                    Sign up
                </button>

                <span class="flex justify-center items-center">or</span>
                <button class=" flex gap-4 justify-center font-serif w-full bg-black  text-white font-bold p-2 rounded-lg hover:bg-slate-400  hover:text-black ">
                <FcGoogle class="mt-1"/>
                    Sign up with Google
                </button>
                <div class="flex   cursor-pointer">
                <label>Already have an account?{" "}
                <span className="hover:underline hover:text-blue-500" onClick={()=>nav('/login')}>Login</span></label>
                </div>
                </div>
            </form>
            </div>
        </div>
    )
}
export default Signup;