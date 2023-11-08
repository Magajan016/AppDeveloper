import { Navigate, Outlet } from "react-router-dom"

   const AdminAuth =()=>{
    const Token = locolStorage.getItem('Token')!=null
    const Role = localStorage.getItem('role')==='ADMIN'
    return (
        Token && Role ?<Outlet/> : <Navigate to='/login'/>
    )
   }
   export default AdminAuth;