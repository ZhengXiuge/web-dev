import React from "react";
import PostSummaryList from "../PostSummaryList/PostSummaryList";

const ExploreComponent = () => {
    return(
        <>
            <div className="row mb-2">

                <div className="col-11">
                    <i className="fas fa-search position-absolute ps-2 pt-2 wd-icon-color"></i>

                    <input id="text-field-search" placeholder="Search Tuiter"
                           className="wd-search-bar ps-5"/><br/>
                </div>

                <div className="col-1 ps-0">
                    <a href="../explore-setting.html"><i className="fas fa-cog fa-2x"></i></a>
                </div>
            </div>

            <ul className="nav mb-2 nav-tabs">

                <li className="nav-item">
                    <a className="nav-link active" href="../for-you.html">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="../trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="../news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="../sports.html">Sports</a>
                </li>
                <li className="nav-item d-none d-md-block">
                    <a className="nav-link" href="../entertainment.html">Entertainment</a>
                </li>
            </ul>


            <div className="position-relative mb-2">
                <img src="./images/Starship.jpg" width="100%"/>
                <div className="position-absolute bottom-0 start-0 ps-2 pb-2 wd-img-font">SpaceX' Starship</div>
            </div>

            <PostSummaryList/>
        </>

    );
}
export default ExploreComponent;
