import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    todoList: [],
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        todoFinished: (state, action) => {
            const { todo, isFinished } = action.payload;
            state.todoList = state.todoList.map((t) => {
                if (t.id === todo.id) {
                    return { ...t, finished: isFinished };
                }
                return t;
            });
        },
        todoDelete: (state, action) => {
            const { todo } = action.payload;
            state.todoList = state.todoList.filter((t) => t.id !== todo.id);
        },
        todoEdit: (state, action) => {
            const { todo, todoText } = action.payload;
            state.todoList = state.todoList.map((t) => {
                if (t.id === todo.id) {
                    return { ...t, todoData: todoText };
                }
                return t;
            });
        },
        todoAdd: (state, action) => {
            const { todoText } = action.payload;
            const newTodo = {
                id: Date.now(),
                finished: false,
                todoData: todoText,
            };
            state.todoList.push(newTodo);
        },
    },

});

export default todoSlice.reducer;
export const { todoFinished, todoDelete, todoEdit, todoAdd } = todoSlice.actions;