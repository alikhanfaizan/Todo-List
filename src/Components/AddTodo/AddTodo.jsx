import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import TodoDispatchContext from "../../context/TodoDispatchContext";

function AddTodo ({todoAdd}) {
  
  const [inputtext, setInputText] = useState("");
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Add new Todo"
        value={inputtext}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() => {
          todoAdd(inputtext);
          setInputText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
