import React from "react";
const Styles = () => {
    const colorBlack = {
        color: "black"
    }
    const padding10px = {
        padding: "10px"
    }
    const bgBlue = {
        "backgroundColor": "lightblue",
        "color": "black",
        ...padding10px
    };
    const bgRed = {
        "backgroundColor": "lightcoral",
        ...colorBlack,
        ...padding10px
    };
    return(
        /*
        The styles component declares constant JSON objects that can be applied to elements using
        the styles attribute.
        Alternatively, the styles attribute accepts a JSON literal object instance which results in
        a weird syntax of double curly brackets as shown below. Note we use background-color instead of backgroundColor.
         */
        <div>
            <h1>Styles</h1>
            <div style={{"backgroundColor": "lightyellow",
                "color": "black", padding: "10px"}}>
                Yellow background</div>
            <div style={bgRed}>
                Red background</div>
            <div style={bgBlue}>
                Blue background</div>
        </div>
    );
};
export default Styles;
