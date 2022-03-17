import React from "react";
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";
import PostList from "../PostList/PostList";
import PostSummaryList from "../PostSummaryList/PostSummaryList";
import "./home.css";

const HomeScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home"/>
            </div>
            <div className="col-10 col-lg-6"
                 style={{"position": "relative"}}>
                <PostList/>
            </div>
            <div className="col-lg-4 col-xl-4 d-none d-lg-block">
                <PostSummaryList/>
            </div>
        </div>
    );
}
export default HomeScreen;