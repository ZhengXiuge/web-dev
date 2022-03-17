/*
Let's create a component out of the line items in the TodoList. We can then parameterize it with the
to do's title. Use the TodoItem function to render three to do items as shown below.
Note the TodoItem function takes as a parameter to do which is a string we use to render a line item.
 */

/*
Things to note when porting JavaScript functions to React.js components:
- Prefer object destructors as a single parameter instead of a list of parameters
- Provide default values for the parameters and/or parameter objects. This helps testing as a standalone components
- Remove or replace unnecessary string concatenation syntax such as back ticks
- Remove or refactor any use of jQuery symbols such as $
- Remove or refactor unnecessary string expressions such as ${}
 */
const TodoItem = ({
                    // provide default object so we can test component standalone
                      todo = {
                          done: true,
                          title: 'Buy milk',
                          status: 'COMPLETED'
                      }
                  }) => {
    return( // we don't need ` `
        <li>
            <input type="checkbox"
                defaultChecked={todo.done}/>
            {todo.title}
            ({todo.status})
        </li>
    );
}
export default TodoItem;



