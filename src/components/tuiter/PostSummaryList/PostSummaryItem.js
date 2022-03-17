import React from "react";

const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "./images/react.png",
            "booleanTweet": false,
            "tweets": "0 Tweets"
        }
    }) => {
    return(
        <>
            <a className="list-group-item" href="/">
                <div className="row align-items-center">
                    <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9">
                        <div className="wd-topic">
                            {post.topic}
                        </div>
                        <div className="wd-userName">
                            {post.userName} <i className="fas fa-check-circle"></i>
                            <span className="wd-time"> - {post.time}</span><br/>
                            {post.title}
                        </div>
                        {/*<div className={`wd-topic ${post.booleanTweet ? post.tweets:''}`}/>*/}
                        {post.booleanTweet ? <div class='wd-topic'>{post.tweets}</div>
                                            : ""}

                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                        <img src={post.image} width="60px" className="rounded-2 float-end"/>
                    </div>
                </div>
            </a>
        </>

    );
}
export default PostSummaryItem