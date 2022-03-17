import React from "react";
import './index.css';
const Classes = () => {
    /*
    Instead of using static classes such as wd-bg-yellow, we could calculate the class we want to apply based on any convoluted logic.
    Here's an example of creating the classes dynamically by concatenating a color constant.
     */
    const color = 'blue';
    /*
    Even more interesting is using expressions to conditionally choose between a set of classes.
    The example below uses either a red or green background based on the dangerous constant.
    Try with dangerous true and false and confirm it renders red or green as  expected.
     */
    const dangerous = true;
    return(
        <div>
            <h2>Classes</h2>
            <div className="wd-bg-yellow wd-fg-black wd-padding-10px">
                Yellow background</div>
            <div className="wd-bg-blue wd-fg-black wd-padding-10px">
                Blue background</div>
            <div className="wd-bg-red wd-fg-black wd-padding-10px">
                Red background</div>
            <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
                Dynamic Blue background</div>
            <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'}
                                                wd-fg-black wd-padding-10px`}>
                Dangerous background</div>

        </div>
    )
};
export default Classes;
