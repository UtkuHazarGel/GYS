import React, { useReducer } from "react";
import createDataContext from "./createDataContext";

const taskReducer = (state, action) => {
  switch (action.type) {
    case "add_task":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: "görev 5",
          content: "açıklama",
        },
      ];
    case "delete_task":
      return state.filter((task)=> task.id !== action.payload)
    default:
      return state;
  }
};

const addTask = (dispatch) => {
  return () => {
    dispatch({ type: "add_task" });
  };
};
const deleteTask = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_task", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  taskReducer,
  { addTask, deleteTask },
  []
);
