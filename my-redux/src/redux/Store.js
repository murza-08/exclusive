import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";


const mystore = configureStore({
    reducer: {
        flower: cartSlice
    }
})

export default mystore