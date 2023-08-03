import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
      name: "todo",
      initialState: {
            value: []
      },
      reducers: {
            addTodo: (state, action) => {
                  
                  state.value.push(action.payload)
            },
            removeTodo: (state, action) => {
                  state.value.splice(action.payload, 1);
            }
      }
})

export const {addTodo,removeTodo} = todoSlice.actions;
export default todoSlice.reducer;