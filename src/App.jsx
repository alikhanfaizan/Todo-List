import { useReducer} from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoList from "./Components/TodoList/TodoList";
import todoContext from "./context/TodoContext";
import todoReducer from "./reducers/todoReducer";
import TodoDispatchContext from "./context/TodoDispatchContext";

function App() {
  const [list,dispach]=useReducer(todoReducer,[]);
  return (
    <todoContext.Provider value={{ list }}>
      <TodoDispatchContext.Provider value={{dispach}}>
      <AddTodo/>
      <TodoList/>
      </TodoDispatchContext.Provider>
    </todoContext.Provider>
  );
}

export default App;
