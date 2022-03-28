/*
The WhoToFollowList component imports the WhoToFollowListItem component by referring to the JavaScript file
where it is implemented. In React.js and JavaScript modules in general, the .js file extension is optional
and it is best practice to remove it when importing a module
 */
import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
// import whos from "./whos.json" // we moved the data into the reducer instead
import {useSelector} from "react-redux"; // import hook to retrieve state from reducer

/*
The WhoToFollowList component iterates over the who array using a map function. The map function
evaluates the WhoToFollowListItem function for each element and collates the results into an array
of strings. These are then joined into a single HTML string. In React.js we are not working with strings
and instead collating component instances to form DOM elements.
 */
const WhoToFollowList = () => {
    // Remove the unnecessary $ and join() functions.
    // Replace the WhoToFollowListItem function call with its tag representation.
    // Pass the who instance as an attribute value.

    // use the useSelector hook to retrieve the state from the store
    const whos = useSelector(state => state.who);      // retrieve state from store

    return (
        <ul className="list-group">
            <a className="list-group-item wd-userName" href="/">
                Who to follow
            </a>
            {
                whos.map(who => {
                    return(
                        <WhoToFollowListItem who={who}/>
                        );
                })
            }
        </ul>
    );
}
export default WhoToFollowList;
