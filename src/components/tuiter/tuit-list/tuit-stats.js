/*
To practice modifying a tuit, let's update its numbers of likes when someone clicks the heart link
below the tuit. If someone clicks the heart icon, the number of likes should increase by one and the
heart should turn red. If the user clicks the heart again, then it's interpreted as unliking the tuit,
the count goes back down by one and the heart is no longer red.
 */
import {useDispatch} from "react-redux";
import React from "react";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (
        <div className="wd-bookmark-icon pt-2">
            <div className="wd-icon">
                <i className="far fa-comment pe-2"></i>{tuit.stats.comments}</div>
            <div className="wd-icon">
                <i className="far fa-arrow-alt-circle-right pe-2"></i>{tuit.stats.retuits}
            </div>
            <div className="wd-icon" onClick={likeTuit}>
                {
                    tuit.liked &&
                    <i className="fas fa-heart me-1"
                       style={{color: 'red'}}></i>
                }
                {
                    !tuit.liked &&
                    <i className="far fa-heart me-1"></i>
                }
                {tuit.stats && tuit.stats.likes}
                {/*<i className="far fa-heart wd-heart-icon-color pe-2"></i>*/}
                {/*<span className="wd-heart-icon-color">{tweet.stats.likes} </span>*/}
            </div>
            <div className="wd-icon">
                <i className="fas fa-external-link-alt"></i></div>
        </div>
    );
}
export default TuitStats;