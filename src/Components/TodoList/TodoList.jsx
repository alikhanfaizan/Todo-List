import React, { useContext } from "react";
import Todo from "../Todo/Todo";
import todoContext from "../../context/TodoContext";
import TodoDispatchContext from "../../context/TodoDispatchContext";

function TodoList() {
  const { list } = useContext(todoContext);
  const {dispach} = useContext(TodoDispatchContext);

  function onFinished(todo, isFinished) {
    dispach({ type: "finished_todo", payload: { todo, isFinished } });
  }

  function onDelete(todo) {
    dispach({ type: "delete_todo", payload: {todo } });
  }

  function onEdit(todo, todoText) {
    dispach({ type: "edit_todo", payload: {todo , todoText} });
  }

  return (
    <div>
      {list.length > 0 &&
        list.map((todo) => (
          <Todo
            key={todo.id}
            isFinished={todo.finished}
            todoData={todo.todoData}
            id={todo.id}
            changeFinished={(isFinished) => onFinished(todo, isFinished)}
            onDelete={()=>onDelete(todo)}
            onEdit={(todoText)=>onEdit(todo, todoText)}
          />
        ))}
    </div>
  );
}

export default TodoList;
