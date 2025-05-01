
import { useDispatch } from "react-redux";
import "./App.css";
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoList from "./Components/TodoList/TodoList";
import { bindActionCreators } from "redux";
import { todoAdd,todoDelete,todoEdit,todoFinished } from "./actions/todoactions";


function App() {

  const dispach = useDispatch();
  const actions=bindActionCreators({todoAdd,todoDelete,todoEdit,todoFinished},dispach);
  return (
    <>
      <AddTodo todoAdd={actions.todoAdd} />
      <TodoList todoDelete={actions.todoDelete} todoEdit={actions.todoEdit} todoFinished={actions.todoFinished} />
    </>
  );
}

export default App;
