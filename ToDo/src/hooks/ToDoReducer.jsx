export const ToDoInitValue = {
    toDo: [],
    inProgress: [],
    done: []
}

export const ToDoReducer = (state, action) => {
    switch (action.type) {
        case "CREATE": {
            console.log(state);
            
            return {
                ...state.toDo, 
                test: action.taskName,
            }
        }

        default : 
            throw new Error(`Unknow Action: ${action.type}`)
    }
}