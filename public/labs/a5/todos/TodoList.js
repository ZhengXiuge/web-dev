/*
Use the TodoList function to render the list of todos as shows below.
What's relevant here is that we are wrapping some static HTML code with a function -- TodoList.
This enables us breaking up pages into modules that can then be combined programmatically.
Also, functions can use logic to generate complex user interfaces. We often refer to these as components.
 */
import TodoItem from "./TodoItem.js";
import todos from "./todos.js";

const TodoList = () => {
    return(`
        <ul>
            ${
                todos.map(todo => {
                    return(TodoItem(todo));
                }).join('')
            }
        </ul>
    `);
}
export default TodoList;

