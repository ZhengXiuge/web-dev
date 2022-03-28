/*
The component uses redux's useSelector hook to extract the message from the reducer.
When the component loads, reducers pass their data in the function declared in useSelector.
In the code below, the parameter hello in (hello) => { … }, gets the object returned by the reducers,
e.g., {message: 'Hello World'}, therefore, (hello) => hello.message returns 'Hello World',
and that's the value const message is initialized with.

The component goes on to render 'Hello World' in an H1 element.
 */
import React from "react";
import {useSelector} from "react-redux"; // // import useSelector hook from react-redux

const HelloReduxExampleComponent = () => {
    /*
    Before we implemented the todos-reducer, we only had the hello reducer. When we combined the
    reducers we bound them to attributes hello and todos: const reducers = combineReducers({hello, todos}).
    The state of each reducer is now accessible through the properties. We now need to retrieve the
    message from the hello sub state as shown below.
     */
    const message = useSelector((state) => state.hello.message); // extract 'Hello World' from reducer
    return(
        <h1>{message}</h1> // render <h1>Hello World</h1>
    );
};

export default HelloReduxExampleComponent;