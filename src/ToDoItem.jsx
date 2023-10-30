import React from "react";


export default function ToDoItem(props) {
  return (
    <div>
      <li>
        {props.todolist}{" "}
        <button
          onClick={() => {
            return props.onChecked(props.id);
          }}
        >
          <span className="listStyle">Delete</span>{" "}
        </button>
      </li>
    </div>
  );
}