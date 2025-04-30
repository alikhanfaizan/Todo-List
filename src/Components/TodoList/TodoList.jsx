import React, { useContext } from "react";
import Todo from "../Todo/Todo";
import todoContext from "../../context/TodoContext";

function TodoList() {
  const { list, setList } = useContext(todoContext);
  return (
    <div>
      {list.length > 0 &&
        list.map((todo) => (
          <Todo
            key={todo.id}
            isFinished={todo.finished}
            todoData={todo.todoData}
            id={todo.id}
            changeFinished={(isFinished) => {
              const updatedList = list.map((t) => {
                if (t.id == todo.id) {
                  t.finished = isFinished;
                }
                return t;
              });
              setList(updatedList);
              console.log("updatedList", updatedList);
            }}
            onDelete={() => {
              const updatedList = list.filter((t) => t.id != todo.id);
              setList(updatedList);
              console.log("updatedList", updatedList);
            }}
            onEdit={(todoText) => {
              const updatedList = list.map((t) => {
                if (t.id == todo.id) {
                  todo.todoData = todoText;
                }
                return t;
              });
              setList(updatedList);
            }}
          />
        ))}
    </div>
  );
}

export default TodoList;
