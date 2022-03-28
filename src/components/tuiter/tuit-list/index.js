import React from "react";
import TuitListItem
    from "./tuit-list-item";
import './tuits.css';

/*
Now we need to refactor tuit-list.js so that it retrieves the tuits from the store instead of the local file as shown below
 */
// import tuits from "./tuits.json";
import {useSelector} from "react-redux"; // replace getting tuits from a file to getting tuits from the store

const TuitList = () => {
    const tuits = useSelector( // get the tuits from the state in the store
        state => state.tuits);
    return (
        <ul className="ttr-tuits list-group">
            {
                tuits.map && tuits.map(tuit =>
                   <TuitListItem key={tuit._id}
                                 tweet={tuit}/>)
            }
        </ul>
    );
}

export default TuitList;