import React from "react";
// Instead of typing the links in a browser's navigation bar, we can create hyperlinks in our components that navigate between components.
// import {Link} from "react-router-dom";
// import NavigationSidebar from "./NavigationSidebar/NavigationSidebar";
// import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
import WhoToFollowList from "./WhoToFollowList/WhoToFollowList";
// import PostSummaryItem from "./PostSummaryList/PostSummaryItem";
// import PostSummaryList from "./PostSummaryList/PostSummaryList";
// import ExploreComponent from "./explore-screen/ExploreComponent";
// import ExploreScreen from "./explore-screen/ExploreScreen";
// import PostItem from "./PostList/PostItem";
// import PostList from "./PostList/PostList";
// import HomeScreen from "./home-screen/HomeScreen";

import {Outlet} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar/NavigationSidebar";
import {Provider} from "react-redux"             // import the Provider
import {combineReducers, createStore} from "redux";               // import the reducer
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import profileReducer from "./reducers/profile-reducer";
import TuitList from "./tuit-list"; // import the reducer

const reducer = combineReducers({tuits: tuitsReducer, who: whoReducer, profile: profileReducer});
const store = createStore(reducer);           // create the store from the reducer

const Tuiter = () => {
    return(
        // provide the store to all child components
        // Once the state is in the store, any component in the body of the Provider can retrieve state from the store.
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    <Outlet/>
                    {/*<TuitList/>*/}
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
};

export default Tuiter;