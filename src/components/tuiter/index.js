import React from "react";
// Instead of typing the links in a browser's navigation bar, we can create hyperlinks in our components that navigate between components.
import {Link} from "react-router-dom";
// import NavigationSidebar from "./NavigationSidebar/NavigationSidebar";
// import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
// import WhoToFollowList from "./WhoToFollowList/WhoToFollowList";
// import PostSummaryItem from "./PostSummaryList/PostSummaryItem";
// import PostSummaryList from "./PostSummaryList/PostSummaryList";
// import ExploreComponent from "./explore-screen/ExploreComponent";
import ExploreScreen from "./explore-screen/ExploreScreen";
// import PostItem from "./PostList/PostItem";
// import PostList from "./PostList/PostList";
// import HomeScreen from "./home-screen/HomeScreen";

const Tuiter = () => {
    return(
        <>
            <h1>Tuiter</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/">
                Labs
            </Link>

            {/*<HomeScreen/>*/}
            <ExploreScreen/>

            {/*<PostSummaryList/>*/}
            {/*<PostSummaryItem post={{*/}
            {/*    "topic": "Web Development",*/}
            {/*    "userName": "",*/}
            {/*    "title": "jQuery",*/}
            {/*    "time": "last week",*/}
            {/*    "image": "./images/jquery.png",*/}
            {/*    "tweets": "122K Tweets",*/}
            {/*    "booleanTweet": true*/}
            {/*}}/>*/}
            {/*<NavigationSidebar active="home"/>*/}
            {/*<WhoToFollowListItem who={{*/}
            {/*    avatarIcon: './images/virgin-logo.png',*/}
            {/*    userName: 'Virgin Galactic',*/}
            {/*    handle: 'virgingalactic',*/}
            {/*}}/>*/}
            {/*<WhoToFollowList/>*/}
        </>

    )
};

export default Tuiter;