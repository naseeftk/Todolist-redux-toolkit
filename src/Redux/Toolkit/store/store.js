import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "../Counter/Counter"
export const store=configureStore({
  reducer:{
    todostate:todoreducer
  }
})