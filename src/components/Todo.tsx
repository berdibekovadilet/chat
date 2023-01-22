import React from "react";
import todo from "../store/todo";

const Todo = () => {
  return (
    <>
      <input type="text" />
      <div>
        {todo.todos.map((item) => (
          <div key={item.id}>
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todo;
