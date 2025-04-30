import React, { useContext, useState } from "react";
import TodoDispatchContext from "../../context/TodoDispatchContext";

function AddTodo () {
  const [inputtext, setInputText] = useState("");
  const { dispach } = useContext(TodoDispatchContext);
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
          dispach({ type: "add_todo", payload: { todoText: inputtext } });
          setInputText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
