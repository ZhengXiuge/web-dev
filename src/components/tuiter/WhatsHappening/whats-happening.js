/*
Let's learn how to work with forms using React and Redux. To learn this new skill, let's create a
textarea users can use to post new tuits as shown here on the right. Implement the textarea, icons
and Tuit button as shown here, in a new file called whats-happening.js using the code below as a guide.
To interact with the textarea, implement a state variable called whatsHappening using the useState
hook as shown below. Bind the value of the whatsHappening state variable to the textarea and its
onChange event handler to update the state variable. Bind the Tuit button to a click event handler
to notify confirm you have access to the whatsHappening state variable. In a later exercise you will
send the state variable to the reducer to actually create the new tuit.
 */
import React, {useState} from "react";  // get the useState hook
import "./whats-happening.css"
import {useDispatch} from "react-redux";
import {createTuit} from "../../actions/tuits-actions";

const WhatsHappening = () => {
    // let [whatsHappening, setWhatsHappening] // create whatsHappening state variable
    //     = useState('');


    const [newTuit, setNewTuit] =                // create a new state variable with
        useState({tuit: 'New tuit'});   // new tuit data

    /*
    Use the redux dispatcher to notify reducers of a create-tuit event. Pass the whatsHappening state
    variable to the reducer as part of a new tuit to add to the array of tuits.
     */
    const dispatch = useDispatch(); // use the hook to get a dispatcher


    // const tuitClickHandler = () => {
    //     // console.log(whatsHappening);    // handle tuit button click just print whatsHappening state variable for now
    //     dispatch({type: 'create-tuit', // use the dispatcher to notify reducer of new
    //                  tuit: whatsHappening    // tuit including text written in textarea
    //              });                         // saved in whatsHappening state variable
    // }

    return (
        <>
            <div className="row pb-3">
                <div className="col-1">
                    <img src={'./images/spacex.jpg'} alt="avatar" width="35px" className="rounded-circle"/>
                </div>
                <div className="col-11 ps-3">
                    <textarea className="form-control w-75 wd-textarea"
                              onChange={(e) =>
                                  setNewTuit({...newTuit,
                                                 tuit: e.target.value})}
                              placeholder="What's happening?"></textarea>

                    {/*<textarea value={whatsHappening}                              // show current whatsHappening in textarea*/}
                    {/*          onChange={(event) =>  // if it changes, update whatsHappening with textarea's value*/}
                    {/*              setWhatsHappening(event.target.value)}*/}
                    {/*          className="wd-textarea"*/}
                    {/*          placeholder="What's happening?">*/}
                    {/*</textarea>*/}
                    <hr/>
                    <span>
                        <a href="/tuiter/home"><i className="far fa-image"></i></a>
                        <a href="/tuiter/home"><i className="fas fa-chart-bar ps-2"></i></a>
                        <a href="/tuiter/home"><i className="far fa-smile ps-2"></i></a>
                        <a href="/tuiter/home"><i className="far fa-calendar ps-2"></i></a>
                    </span>

                    <button onClick={() =>                              // click Tuit button
                        createTuit(dispatch, newTuit)}                  // to invoke createTuit action, pass dispatcher and newTuit to send to server and then to the reducer
                            className="btn btn-primary float-end">
                        Tuit
                    </button>
                    {/*<button onClick={tuitClickHandler} className="btn btn-primary rounded-pill fa-pull-right">*/}
                    {/*    Tweet*/}
                    {/*</button>*/}
                </div>
            </div>

        </>
    );
}
export default WhatsHappening;