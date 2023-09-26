import { configureStore } from "@reduxjs/toolkit";
import ItemsSliceReducer from "./slices/ItemsSlice";


export const store = configureStore({
    reducer : {
        items : ItemsSliceReducer
    }
})