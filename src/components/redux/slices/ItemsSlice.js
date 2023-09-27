import { createSlice } from "@reduxjs/toolkit";
import { orderData } from "../../../../data";

const initialValue = orderData;

const itemsSlice = createSlice({
    name : 'items',
    initialState : initialValue,
    reducers : {
     approve : (state,action)=>{
        const old = [...state]
        old[action.payload.indx] = {...old[action.payload.indx],status : 'approved',quantity : old[action.payload.indx].quantity === 0 ? 1 : old[action.payload.indx].quantity };
        return [...old]
     },
     missing : (state,action)=>{
        const old = [...state];
        const {payload} = action;
        old[payload.indx] = {...old[payload.indx],status : 'missing',quantity : 0}
        return [...old]
     },
     missingUrgent : (state,action)=>{
        const old = [...state];
        const {payload} = action;
        old[payload.indx] = {...old[payload.indx],status : 'missing-urgent',quantity : 0}
        return [...old]
     },
     changeQuantity : (state,action)=>{
        const old = [...state];
        const {payload} = action;
        old[payload.indx] = {...old[payload.indx],quantity : payload.quantity,status : ''}
        return [...old]
     },
     changePrice : (state,action)=>{
        const old = [...state];
        const {payload} = action;
        old[payload.indx] = {...old[payload.indx],price : payload.price,status : ''}
        return [...old]
     },

    }
})

export const { approve,missing,missingUrgent,changeQuantity,changePrice} = itemsSlice.actions
export default itemsSlice.reducer