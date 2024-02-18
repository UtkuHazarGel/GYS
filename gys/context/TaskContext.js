import React, { useReducer } from "react";
import createDataContext from "./createDataContext";

const taskReducer = (state, action) => {
  switch (action.type) {
    case "add_task":
      return [...state, { title: "görev 4",content:"açıklama"}];
    default:
      return state;
  }
};

const addTask = (dispatch) => {
  return ()=>{
    dispatch({ type: "add_task" });
  }
  
};

export const {Context,Provider}=createDataContext(taskReducer,{addTask},[]);
