import profileData from "../data/profiles.js";

const profileReducer = (state= profileData, action) => {
    switch(action.type) {
        case 'save':
            return action.profile;
        default:
            return state;
    }
}

export default profileReducer;