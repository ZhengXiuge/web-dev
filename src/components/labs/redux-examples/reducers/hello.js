/*
Notice that we could have stored the data {message: 'Hello World'} into a static JSON file, but the
point here is to learn how to dynamically mutate the data as the user interacts with the application.
To do that we wrap the data in a function that can calculate the data dynamically as circumstances
change over time.
 */
const hello = () => ({message: 'Hello World'});

export default hello;