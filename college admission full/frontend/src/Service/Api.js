import axios from "axios";
let jwtToken = localStorage.getItem('Token');
const authHeader = `Bearer ${jwtToken}`;
console.log(jwtToken);
const headers = {
    "Content-Type":"application/json",
    Authorization:authHeader,
};
const url='http://localhost:8181';

const userRegister =(signup)=>axios.post(`${url}/auth/register`,signup);
const userLogin =(login)=>axios.post(`${url}/auth/login`,login);

export  {userLogin,userRegister};