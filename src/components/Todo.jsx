import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

export default function Todo() {
  const todoList = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        padding: "30px",
        margin: "50px auto",
        width: "50svw",
      }}
    >
      <h1>TODO List</h1>
      <ul>
        {todoList.map((todo) => (
          <li
            key={todo.id}
            style={{
              fontSize: "20px",
              margin: "20px 0",
              padding: "10px 30px",
              background: "black",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}> X </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
