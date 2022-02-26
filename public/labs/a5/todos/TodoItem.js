/*
Let's create a component out of the line items in the TodoList. We can then parameterize it with the
to do's title. Use the TodoItem function to render three to do items as shown below.
Note the TodoItem function takes as a parameter to do which is a string we use to render a line item.
 */
const TodoItem = (todo) => {
    return(`
        <li>
            <input type="checkbox"
                ${todo.done ? 'checked' : ''}/>

            ${todo.title}
            (${todo.status})
        </li>
    `);
}
export default TodoItem;



