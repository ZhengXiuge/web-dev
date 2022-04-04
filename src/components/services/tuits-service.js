/*
In the server we implemented all the tuits related endpoints in one file: tuits-controller.js. We'll
follow a similar strategy on the client side implementing all tuits related HTTP communication in
tuits-service.js under a new services folder. Declare the four common CRUD operations and implement
them in the following sections. The functions are all implemented as asynchronous functions that will
not block the browser's sole JavaScript thread. Instead they will rely on the browser's multithreaded
capabilities to send HTTP requests asynchronous and notify our functions when responses eventually resolve.
 */
import axios from 'axios';

/*
Let's now deploy our React client application to a remote server on Netlify. Currently our client
application connects to a local Node server, which is fine when it's running locally, but it should use the remote Heroku Node server when it's also running remotely on Netlify.
 */
// const TUITS_API = 'https://full-stack-developer-server-z.herokuapp.com/api/tuits';
// const TUITS_API = 'http://localhost:4000/api/tuits';

/*
This is all and good and would work if we deploy the React application as is, but we would like the
URL to point to the local Node server when developing locally, and use the remote server when deployed
remotely without having to change the URLs manually ourselves. To automate which URL to use in what
environment we can use environment variables to define application wide constants based on the
environment the application is running in. Environment variables must start with REACT_APP_ and can
be accessed from the React code using process.env as shown below retrieving environment variable
REACT_APP_API_BASE. Locally REACT_APP_API_BASE can be set to http://localhost:4000/api, but when the
application runs remotely it can instead be set to https://full-stack-developer-server.herokuapp.com/api.
This way the local React application will connect to the local Node server, but use the Heroku Node
server when running remotely in Netlify.
 */
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;

/*
The axis.post() function embeds the tuit parameter in the body of the HTTP request and then POSTs it
to TUITS_API. The response data contains the new tuit including a unique ID and initial default values such as likes set to 0.
 */
export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}

export const findAllTuits = async () => {
    const response = await axios.get(TUITS_API); // The findAllTuits function sends an HTTP GET request to the TUITS_API using the axios.get() function.
    // The request is asynchronous as evidenced by the async and await keywords and the response will be set when the request resolves from the server.
    const tuits = response.data; // The data in the response is the tuits array sent back from findAllTuits in tuits-controller.js and it's embedded in the response's data property.
    return tuits;
}

/*
The only additional complexity for deleteTuit is that it needs to append the ID of the tuit being
removed as expected by the corresponding endpoint implemented in the tuits-controller.js.
The ID is appended from the tuit parameter and the response is just a status.
 */
export const deleteTuit = async (tuit) => {
    const response = await axios
        .delete(`${TUITS_API}/${tuit._id}`);
    return response.data;
}

/*
In the updateTuit function below the axios.put() function embeds the updated tuit parameter in the
body of the HTTP request and then PUTs it to TUITS_API with the tuit's ID appended at the end.
 */
export const updateTuit = async (tuit) => {
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return response.data;
}