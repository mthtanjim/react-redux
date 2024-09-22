import { createSlice } from "@reduxjs/toolkit";

const initialState = [

]

const counterSlice = createSlice({
    name: "counters",
    initialState,
    reducers: {
        increment: (state, action) => {
            
        },
        decrement: (state, action) => {

        },
    }
})

