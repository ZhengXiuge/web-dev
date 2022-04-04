/*
To practice modifying a tuit, let's update its numbers of likes when someone clicks the heart link
below the tuit. If someone clicks the heart icon, the number of likes should increase by one and the
heart should turn red. If the user clicks the heart again, then it's interpreted as unliking the tuit,
the count goes back down by one and the heart is no longer red.
 */
import {useDispatch} from "react-redux";
import React from "react";
import {updateTuit} from "../../actions/tuits-actions";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();

    let likes = tuit.stats && tuit.stats.likes
    let dislikes = tuit.stats && tuit.stats.dislikes

    const likeTuit = () => {
        /*
        The updateTuit action and service can be used to update any property of the tuit object.
        Under the tuit's text, the likes property is rendered along with a thumbs up icon with an
        onClick event handler. Click the icon invokes the updateTuit action passing it a reference
        to dispatch as well as a new version of the tuit object with incremented value of likes.
         */


        if(tuit.liked === true && ! tuit.disliked === true) {
            tuit.liked = false;
            likes--;
        }
        else if (tuit.liked === false){
            tuit.liked = true;
            tuit.disliked = false;
            likes++;
            dislikes--;
        }

        const stats = {
            ...tuit.stats,
            likes,
            dislikes
        }

        updateTuit(dispatch, {
            ...tuit,
            stats
        })
        // dispatch({type: 'like-tuit', tuit});
    };

    const dislikeTuit = () => {
        /*
        The updateTuit action and service can be used to update any property of the tuit object.
        Under the tuit's text, the likes property is rendered along with a thumbs up icon with an
        onClick event handler. Click the icon invokes the updateTuit action passing it a reference
        to dispatch as well as a new version of the tuit object with incremented value of likes.
         */

        if(tuit.disliked === true && ! tuit.liked === true) {
            tuit.disliked = false;
            dislikes--;
        }
        else if (tuit.disliked === false) {
            tuit.disliked = true;
            tuit.liked = false;
            dislikes++;
            likes--;
        }

        const stats = {
            ...tuit.stats,
            dislikes,
            likes
        }

        updateTuit(dispatch, {
            ...tuit,
            stats
        })
    };

    return (

        <div className="wd-bookmark-icon pt-2">
            <div className="wd-icon">
                <i className="far fa-comment pe-2"></i>{tuit.stats && tuit.stats.comments}</div>
            <div className="wd-icon">
                <i className="far fa-arrow-alt-circle-right pe-2"></i>{tuit.stats && tuit.stats.retuits}
            </div>

            <div className="wd-icon" onClick={likeTuit} >

                Likes: {tuit.stats && tuit.stats.likes}
                {
                    tuit.liked &&
                    <i className="far fa-thumbs-up ms-2" style={{color: 'red'}}></i>
                }
                {
                    !tuit.liked &&
                    <i className="far fa-thumbs-up ms-2"></i>
                }

                {/*<div>*/}
                {/*    Likes: {tuit.likes}*/}
                {/*    <i onClick={() => updateTuit(dispatch, {*/}
                {/*        ...tuit,*/}
                {/*        likes: tuit.likes + 1*/}
                {/*    })} className="far fa-thumbs-up ms-2"></i>*/}
                {/*</div>*/}

                {/*{*/}
                {/*    tuit.liked &&*/}
                {/*    <i className="fas fa-heart me-1"*/}
                {/*       style={{color: 'red'}}></i>*/}
                {/*}*/}
                {/*{*/}
                {/*    !tuit.liked &&*/}
                {/*    <i className="far fa-heart me-1"></i>*/}
                {/*}*/}

                {/*{tuit.stats && tuit.stats.likes}*/}

            </div>

            <div className="wd-icon" onClick={dislikeTuit} >

                Dislikes: {tuit.stats && tuit.stats.dislikes}
                {
                    tuit.disliked &&
                    <i className="far fa-thumbs-down ms-2" style={{color: 'red'}}></i>
                }
                {
                    !tuit.disliked &&
                    <i className="far fa-thumbs-down ms-2"></i>
                }
            </div>

            <div className="wd-icon" style={{paddingLeft:'10px'}}>
                <i className="fas fa-external-link-alt"></i></div>
        </div>
    );
}
export default TuitStats;