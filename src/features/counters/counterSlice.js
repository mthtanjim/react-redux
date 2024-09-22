import { createSlice } from "@reduxjs/toolkit";

const initialState = {value: 5}

const counterSlice = createSlice({
    name: "counters",
    initialState,
    reducers: {
        increment: (state, action) => {
                state.value++
                console.log("action.payload:::", action);
        },
        decrement: (state, action) => {
            state.value--
            console.log("action.payload:::", action);
        },
        reset: (state, action) => {
            state.value = 0
        }
    }
})

export default counterSlice.reducer
export const {increment, decrement, reset} = counterSlice.actions
