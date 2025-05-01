import React, { useContext } from "react";
import Todo from "../Todo/Todo";
import todoContext from "../../context/TodoContext";
import { useDispatch, useSelector } from "react-redux";
import TodoDispatchContext from "../../context/TodoDispatchContext";

function TodoList({ todoDelete, todoEdit, todoFinished }) {
  const list = useSelector((state) => state.todo);

  function onFinished(todo, isFinished) {
    todoFinished(todo, isFinished);
  }

  function onDelete(todo) {
    todoDelete(todo);
  }

  function onEdit(todo, todoText) {
    todoEdit(todo, todoText);
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
            onDelete={() => onDelete(todo)}
            onEdit={(todoText) => onEdit(todo, todoText)}
          />
        ))}
    </div>
  );
}

export default TodoList;
