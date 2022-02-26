/*
Instead of invoking TodoItem several times, we could have all the todos stored in a data structure,
like an array, and then iterate over it to render our content. Create a file called todos.js that contains an array of todos.
Import the file from TodoList.js and use it to render the todos as shown below.
Refresh the page and confirm the same todos are rendered. Note that TodoList is now iterating over
the todos array imported from the todos.js file. We use the function map to iterate over the todos array.
The map function iterates over the todos array and for each element in the array, it invokes the functional parameter.
Each element is bound to the to do function parameter, which is used to invoke the TodoItem function.
The map function collates all the resulting HTML strings from TodoItem into an array which we then join them all into a single string.
 */
// export default [
//     'Buy milk',
//     'Pickup the kids',
//     'Walk the dog'
// ];

/*
Convert the elements of the array in todos.js into objects with properties title and status.
Update TodoItem to render the properties as shown below.
 */
// export default [
//     {   title: 'Buy milk',
//         status: 'CANCELED',
//     },
//     {   title: 'Pickup the kids',
//         status: 'IN PROGRESS',
//     },
//     {   title: 'Walk the dog',
//         status: 'DEFERRED',
//     }, ];

/*
Add boolean attribute done to the objects and render it as a checkbox in the TodoItem.js as shown below.
 */
export default [
    {   title: 'Buy milk', status: 'CANCELED',
        done: true,
    },
    {   title: 'Pickup the kids', status: 'IN PROGRESS',
        done: false,
    },
    {   title: 'Walk the dog', status: 'DEFERRED',
        done: false,
    },];