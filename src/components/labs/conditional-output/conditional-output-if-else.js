import React from "react";

/*
The following example decides to render one content versus another based on a simple boolean constant loggedIn.
If the user is loggedIn, then the component renders a greeting, otherwise suggests the user should login.
 */
const ConditionalOutputIfElse = () => {
    const loggedIn = true;
    if(loggedIn) {
        return(<h2>Welcome If Else</h2>);
    } else {
        return (<h2>Please login If Else</h2>);
    }
};
export default ConditionalOutputIfElse;
