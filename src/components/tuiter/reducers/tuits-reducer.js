/*
The earlier TuitList implementation imported tuits.json and iterated over the array. This is fine if
the array is static, but it's insufficient if we need to create new tuits, delete old ones, and edit
existing tuits. To do that we are going to have to be able to mutate the state of the current list
of tuits as we generate different events based on user input.
 */
import tuits from "../data/tuits.json";

const tuitsReducer = (state = tuits, action) => {
    switch (action.type) {
        /*
        The dispatched action is sent to all reducers which is handled by the tuit reducer below.
        It the action.type is 'like-tuit' a new state is for the tuit's liked is calculated.
        We iterate over all the tuits looking for the liked tuit. If the tuit was already liked,
        then we unlike it and decrease liked counter. If the tuit had not been liked yet, the we set
        it's liked flag to true, and increment its liked counter.
         */
        case 'like-tuit':                           // handle action.type 'like-tuit' event
            return state.map(tuit => {              // calculate a new state
                if(tuit._id === action.tuit._id) {  // if it's the tuit we liked
                    if(tuit.liked === true) {       // and it's already liked
                        tuit.liked = false;         // then unlike it
                        tuit.stats.likes--;         // and reduce likes count
                    } else {                        // otherwise
                        tuit.liked = true;          // like the tuit
                        tuit.stats.likes++;         // and increment its like count
                    }
                    return tuit;                    // include new tuit changes in array of tuits
                } else {                            // otherwise
                    return tuit;                    // keep the old tuit object
                }
            });

        // The dispatcher sends the action object to all reducers which we handle this particular type of event
        case 'delete-tuit':                             // handle new action type to delete a tuit
            return state.filter(                        // calculate new state by
                tuit => tuit._id !== action.tuit._id);  // filtering out the tuit we deleted in the user interface

        case 'create-tuit':
            const newTuit = {
                tuit: action.tuit,
                _id: (new Date()).getTime() + '',
                postedBy: {
                    "username": "ReactJS"
                },
                stats: {
                    retuits: 111,
                    likes: 222,
                    comments: 333
                },
                logo_image:"./images/spacex.jpg",
                time:"2h",
                handle:"ReactJS"
            }
            return [
                newTuit,
                ...state,
            ];
        default:
            return tuits
    }
}

export default tuitsReducer;