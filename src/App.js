import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

export default function App() {
  const [inputText, setInputText] = useState();
  const [list, addList] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleClick() {
    addList((prevValue) => {
      return [...prevValue, inputText];
    });
    setInputText(" ");
  }

  function deleteItem(id) {
    addList((prevValue) => {
      return prevValue.filter((list, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>To-do-List App</h1>
        </div>
        <div className="form">
          <input
            type="text"
            value={inputText}
            onChange={handleChange}
            placeholder="Enter any Task"
            required
          />
          <button onClick={handleClick}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {list.map((item, index) => {
              return (
                <ToDoItem
                  key={index}
                  id={index}
                  todolist={item}
                  onChecked={deleteItem}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}


