import React from "react";
import "./tuits.css"
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";

import {deleteTuit}
    from "../../actions/tuits-actions";

const TuitListItem = ({tweet}) => {
    /*
    When the user clicks on the icon, use the redux dispatcher to notify the reducer with a delete-tuit event,
    and the tuit itself. The reducer can then remove the tuit from the tuit array, and the list of tuit would re-render minus the deleted tuit.
     */
    const dispatch = useDispatch();                   // get dispatcher to send message to reducer
    // const deleteTuit = (tweet) => {                   // handle delete tuit click event
    //     dispatch({type: 'delete-tuit', tuit: tweet})  // notify redux reducer with delete-tuit event and
    // };                                                // deleted tuit

    return(
        <>
            <div className="list-group-item pt-2 pb-2">
                <div className="row">

                    <div className="col-1">
                        <img src={tweet["logo_image"]} alt="avatar" width="35px" className="rounded-circle"/>
                    </div>
                    <div className="col-11 wd-userName ps-3">
                        {/*<i onClick={() =>                   // create new remove icon on top, right corner of*/}
                        {/*    deleteTuit(tweet)}              // each tuit. Bind click event with click handler*/}
                        {/*   className="fas fa-times-circle*/}
                        {/*fa-pull-right"></i>*/}
                        <i className="fas fa-times-circle float-end"
                           onClick={() => deleteTuit(
                               dispatch, tweet)}></i>

                        {tweet.postedBy.username}{tweet.verified && <i className="fas fa-check-circle"></i>}
                        <span className="wd-handle"> @{tweet.handle} • {tweet.time}</span>
                        <div className="wd-po">
                            {tweet.tuit}
                        </div>

                        {
                            tweet.attachments && tweet.attachments.image &&
                            <img src={tweet.attachments.image}
                                 alt="attachment"
                                 className="mt-2 wd-border-radius-20px"
                                 style={{width: "100%"}}/>
                        }
                        {
                            tweet.attachments && tweet.attachments.video &&
                            <iframe width="100%" height="350px"
                                    className="mt-2 wd-border-radius-20px"
                                    style={{width: "100%"}}
                                    src={`https://www.youtube.com/embed/${tweet.attachments.video}`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        }

                        <TuitStats tuit={tweet}/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TuitListItem