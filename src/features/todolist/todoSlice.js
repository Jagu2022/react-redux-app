import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    todos: ["superman", "deadpool", "batman"]
}

export const todoSlice = createSlice({
    name: "todolist",
    initialState,
    reducers: {
        add: (state, action) => {state.todos.push(action.payload)},
        del: (state, action) => {state.todos.splice(action.payload, 1)}
    }
})

 export const {add, del} = todoSlice.actions
 export default todoSlice.reducer