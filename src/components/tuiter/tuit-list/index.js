import React, {useEffect} from "react";
import TuitListItem
    from "./tuit-list-item";
import './tuits.css';

/*
Now we need to refactor tuit-list.js so that it retrieves the tuits from the store instead of the local file as shown below
 */
// import tuits from "./tuits.json";
import {useDispatch, useSelector} from "react-redux"; // replace getting tuits from a file to getting tuits from the store
// import * as service from "../../services/tuits-service";
import {findAllTuits} from "../../actions/tuits-actions";

const TuitList = () => {
    const tuits = useSelector( // get the tuits from the state in the store
        state => state.tuits);

    /*
    A TuitList React component can use the tuits-service to retrieve the tuits when the component loads.
    The useEffect hook declares a function callback to be invoked when the component first loads.
    In our case we call a local findAllTuits function that uses the service's findAllTuits function
    to retrieve all the tuits and then sent to a reducer to store the new state.
     */
    const dispatch = useDispatch();

    /*
    Now that we have actions declared we can refactor TuitList removing the findAllTuits function
    implementation and instead using the findAllTuits action and passing a reference to the dispatch.
    We'll follow the same strategy for all other service and action implementation in the following sections.
     */
    useEffect(() => findAllTuits(dispatch),[]);

    // const findAllTuits = async () => {
    //     const tuits = await service.findAllTuits();
    //     dispatch({
    //                  type: 'FIND_ALL_TUITS',
    //                  tuits: tuits
    //              });
    // }
    // useEffect(findAllTuits, []);

    console.log(tuits)
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