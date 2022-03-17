/*
Use the TodoList function to render the list of todos as shows below.
What's relevant here is that we are wrapping some static HTML code with a function -- TodoList.
This enables us breaking up pages into modules that can then be combined programmatically.
Also, functions can use logic to generate complex user interfaces. We often refer to these as components.
 */

/*
Additional things to note when porting JavaScript functions to React.js components:
- JavaScript file extensions are optional when importing them
- Data files should be JSON files formatted as such
- Replace nested function calls with equivalent tags
- Replace function parameter calls with attributes
- Remove string concatenation functions such as join('')
 */
import TodoItem from "./TodoItem.js";
import todos from "./todos.json"; // .js is optional reformat as JSON

const TodoList = () => {
    return(
        <ul>
            {
                todos.map(todo => {
                    return(<TodoItem todo={todo}/>);
                })
            }
        </ul>
    );
}
export default TodoList;

