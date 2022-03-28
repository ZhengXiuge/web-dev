import React from "react";
// Instead of typing the links in a browser's navigation bar, we can create hyperlinks in our components that navigate between components.
import {Link} from "react-router-dom";
// import Classes from "./classes";

/*
In HTML the styles attribute accepts a CSS string to style the element applied to.
In React.js, the styles attribute does not accept a string, instead it accepts a JSON object where
the properties are CSS properties and the values are CSS values.
 */
// import Styles from "./styles";
// import ConditionalOutput from "./conditional-output";
// import TodoList from "./todo/TodoList";
import ReduxExamples from "./redux-examples";

const Labs = () => {
    return(
        <div>
            <h1>Labs</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/home">
                Tuiter
            </Link>

            <ReduxExamples/>
            {/*<TodoList/>*/}
            {/*<ConditionalOutput/>*/}
            {/*<Styles/>*/}
            {/*<Classes/>*/}
        </div>
    )
};

export default Labs;