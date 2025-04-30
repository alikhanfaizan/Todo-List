import { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoList from "./Components/TodoList/TodoList";
import todoContext from "./context/TodoContext";

function App() {
  const [list, setList] = useState([
    { id: 1, todoData: "Todo 1", finished: false },
    { id: 2, todoData: "Todo 2", finished: false },
    { id: 3, todoData: "Todo 3", finished: false },
    { id: 4, todoData: "Todo 4", finished: false },
    { id: 5, todoData: "Todo 5", finished: false },
    { id: 6, todoData: "Todo 6", finished: false },
  ]);
  return (
    <todoContext.Provider value={{ list, setList }}>
      <AddTodo
        updateList={(todo) =>
          setList([
            ...list,
            { id: Date.now(), todoData: todo, finished: false },
          ])
        }
      />
      <TodoList/>
    </todoContext.Provider>
  );
}

export default App;
