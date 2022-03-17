/*
One of the strength of React.js is that it incourages breaking up large applications into smaller
parts or components you can then assemble into sophisticated user interfaces.

Let's create our first React.js component by breaking out the Hello World H1 element into a separate
JavaScript file as shown below.
 */

import React from "react";
// Instead of typing the links in a browser's navigation bar, we can create hyperlinks in our components that navigate between components.
import {Link} from "react-router-dom";

const HelloWorld = () => {
    return(
        <>
            <h1>Hello World!</h1>
            <Link to="/">
                Labs
            </Link> |
            <Link to="/tuiter/home">
                Tuiter
            </Link>
        </>
    )
};

export default HelloWorld;
