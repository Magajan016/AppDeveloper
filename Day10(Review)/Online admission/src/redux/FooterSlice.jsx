import { create } from "@mui/material/styles/createTransitions";
import {createSlice} from "@reduxjs/toolkit";

export const FooterSlice = createSlice({
    name:"footer",
    initialState:{
        footer:null
    },
    reducers:{
        open:(state,action)=>{
            state.footer=action.payload;
        },
        close:(state)=>{
            state.footer=null;
        }
    }
})
export const {open,close}=FooterSlice.actions;
export const selectUser = (state)=>state.footer.footer;
export default FooterSlice.reducer;