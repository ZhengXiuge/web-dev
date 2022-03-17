/*
The WhoToFollowList component imports the WhoToFollowListItem component by referring to the JavaScript file
where it is implemented. In React.js and JavaScript modules in general, the .js file extension is optional
and it is best practice to remove it when importing a module
 */
import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import whos from "./whos.json"

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
