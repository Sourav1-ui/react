import{configureStore} from "@reduxjs/toolkit";
// add all reducer from todoslice into store. it means store k awerness dichi j sob reducuer gulo kothai ache. jodi awerness na di tahole storer modddhe state update hbe na..........
import todoReducer from '../feature/todo/todoSlice'

export const store=configureStore({
    reducer:todoReducer

})