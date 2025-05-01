 function todoReducer(state=[], action) {
    if(action.type == 'add_todo'){
       let todoText = action.payload.todoText;
       return [...state, {id: Date.now(), todoData: todoText, finished: false}];
    }
    if(action.type == 'delete_todo'){
        let todo = action.payload.todo;
        const updatedList = state.filter((t) => t.id != todo.id);
        return updatedList;
    }
    if(action.type == 'edit_todo'){
        let todo=action.payload.todo;
        let todoText=action.payload.todoText;
        const updatedList = state.map((t) => {
            if (t.id == todo.id) {
                t.todoData = todoText;
            }
            return t;
        });
        return updatedList;
    }
    if(action.type == 'finished_todo'){
        let todo=action.payload.todo;
        let isFinished=action.payload.isFinished;
        const updatedList = state.map((t) => {
            if (t.id == todo.id) {
                t.finished = isFinished;
            }
            return t;
        });
        return updatedList;
    }
    return state;
}
export default todoReducer;