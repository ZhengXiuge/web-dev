alert('Hello World!');

/*
We'll dynamically render all the content in this div. In the NavigationSidebar.js file, replace the content with
the code below which appends HTML into the new div.
Note that we are using back ticks ( ` ) inside the append function, not single quotes ( ' ).
The relevant point here is that we are programmatically adding content into the DOM, instead of using static HTML.
 */
import TodoList from "./TodoList.js";

$('#wd-todo').append(`
    <div class="container">
        <h1>Todo example</h1>
        ${TodoList()}
    </div>
`);


