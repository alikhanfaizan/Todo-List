import {ADD_TODO,DELETE_TODO,FINISHED_TODO,EDIT_TODO} from '../constants/actions'

export const todoFinished= (todo,isFinished) => ({ type: FINISHED_TODO, payload: { todo, isFinished } });
export const todoDelete= (todo) => ({ type: DELETE_TODO, payload: { todo } });
export const todoEdit= (todo,todoText) => ({ type: EDIT_TODO, payload: { todo, todoText } });
export const todoAdd= (inputtext) => ({ type: ADD_TODO, payload: { todoText: inputtext } });