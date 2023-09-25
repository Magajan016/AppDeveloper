import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
// import FooterSlice from "./FooterSlice";
import footerReducer from "./FooterSlice"
export default configureStore({
    reducer:{
        user:userReducer,
        footer:footerReducer
    }
})