import React from "react";
import {Provider} from "react-redux"; // import Provider which will deliver the data
import HelloReduxExampleComponent from "./hello-redux-example-component"; // import the component that consumes the data
import hello from "./reducers/hello"; // import reducer that calculates/generates the data
import {combineReducers, createStore} from "redux"; // import createStore to store data from reducers

/*
Notice that the todos-reducer.js declares an initial set of todos objects in a constant array.
This will be the initial state of our simple todos application.
We will then practice how to mutate the state in later lab exercises.
All reducers must collate their collective states into a common store. To do this we will use combineReducers
to collate the various reducers into a single reducer as shown below.
 */
import todos from "./reducers/todos-reducer";
import Todos from "./reducers/todos-component"; // import new component to render todos
const reducers = combineReducers({hello, todos}) // combine all reducers into a single reducer each available through these namespaces

const store = createStore(reducers); // // create single store from combined reducers

const ReduxExamples = () => {
    // We connect the two -- data source and data consumer -- through a Provider
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};
export default ReduxExamples;