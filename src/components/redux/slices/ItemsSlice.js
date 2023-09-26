import { createSlice } from "@reduxjs/toolkit";
import { orderData } from "../../../../data";

const initialValue = orderData;

const itemsSlice = createSlice({
    name : 'items',
    initialState : initialValue,
    reducers : {
     approve : (state,action)=>{
        const old = [...state]
        old[action.payload.indx] = {...old[action.payload.indx],status : old[action.payload.indx].status === "approved" ?  '': 'approved'};
        return [...old]
     },

    }
})

export const { approve} = itemsSlice.actions
export default itemsSlice.reducer