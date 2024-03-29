import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        inc: (state, action) => {state.count ++},
        dec: (state, action) => {state.count --},
        res: (state, action) => {state.count = initialState.count}
    }
})

export const {inc, dec, res} = counterSlice.actions
export default counterSlice.reducer