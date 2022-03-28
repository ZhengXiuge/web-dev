/*
Redux allows maintaining the state of an application. The state changes over time as the user
interacts with the application.
There are four basic ways we interact with data: create data, read data, update date, and delete data.
We often refer to these operations by the acronym CRUD. Let's implement a small todos app to illustrate the CRUD operations.
*/

const data = [
    {
        _id: "123",
        do: "Accelerate the world's transition to sustainable energy",
        done: false
    },
    {
        _id: "234",
        do: "Reduce space transportation costs to become a spacefaring civilization",
        done: false
    },
];

/*
All the reducers will be invoked with the same action object. We'll handle the create-todos event in
the todos reducer as shown below. We'll append the new todos passed through in the action to the end of the new state.
 */
const todosReducer = (state = data, action) => {
    switch (action.type) {
        /*
        Handle the update-todo event by rebuilding the array from the old and new versions. As you
        iterate over the todos, keep the old ones if they are not the one being updated, and keep
        the new one if it's the one passed in action.todo.
         */
        case 'update-todo':
            const newTodos = state.map(todo => {
                const newTodo = todo._id === action.todo._id ? action.todo : todo;
                return newTodo;
            });
            return newTodos;
        /*
        The dispatch will send the action object to all reducers, but only the todos reducer is going
        to pay any attention to the action type delete-todo. The reducer will create a brand new state
        that contains all the todos minus the one being deleted. This is achieved using a filter that
        skips over the deleted todo. Refresh the Website and confirm that you can delete todos.
        */
        case 'delete-todo':  // todos reducer handles 'delete-todo' event
            return state     // new state is filtered todo out from todos
                .filter(todo =>
                            todo !== action.todo);
        case 'create-todo': // handle create-todo action type
            const newTodo = {
                ...action.todo,
                _id: (new Date()).getTime() + ""
            };
            return [        // create new state as array
                ...state,   // containing old todos
                newTodo     // and appending the new todo at the end of the array
            ]               // return new state
        default:
            return state;
    }
}


export default todosReducer;