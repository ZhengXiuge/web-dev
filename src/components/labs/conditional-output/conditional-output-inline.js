import React from "react";

/*
A more compact way to achieve the same thing is to include the conditional content in a boolean
expression that shortcircuits the content if its false or evaluates the expression if it's true.
 */
const ConditionalOutputInline = () => {
    const loggedIn = false;
    return (
        // if loggedIn is true, then this expression evaluates
        // if loggedIn is false, then this expression evaluates
        <>
            { loggedIn && <h2>Welcome Inline</h2>}
            {!loggedIn && <h2>Please login Inline</h2>}
        </>
    );
};
export default ConditionalOutputInline;
