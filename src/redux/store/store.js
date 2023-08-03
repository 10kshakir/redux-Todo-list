import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../slice/Todo.js"
export default configureStore({
      reducer:{
            Todo:TodoReducer,
      }
})