import React, { useContext, useState } from "react";

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
          todoAdd({todoText:inputtext});
          setInputText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
