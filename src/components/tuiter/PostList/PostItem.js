import React from "react";

const PostItem = (
    {
        post = {
            "avatar": "./images/spacex.jpg",
            "userName": "Elon Musk",
            "handle": "elonmusk",
            "time": "23h",
            "po": "Amazing show about @inspiration4x mission!",
            "link": "https://twitter.com/inspiration4x",
            "image": "./images/inspiration4.jpeg",
            "booleanTitle": true,
            "title": "Watch Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "booleanContent": true,
            "content": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space mission.",
            "postContent": true,
            "replies": "4.2k",
            "retweets": "3.5k",
            "likes": "37.5k"
        }
    }) => {
    return(
        <>
            <div className="border-bottom border-secondary pt-2 pb-2">
                <div className="row">
                    <div className="col-1">
                        <img src={post.avatar} width="35px" className="rounded-circle"/>
                    </div>
                    <div className="col-10 wd-userName">
                        {post.userName} <i className="fas fa-check-circle"></i>
                        <span className="wd-handle"> @{post.handle} • {post.time}</span>
                        <div className="wd-po">
                            {post.po}
                        </div>

                        <div className="card bg-transparent border-secondary mt-2">
                            <img src={post.image}
                                 className="card-img-top border-bottom border-secondary"/>
                            {post.postContent ?
                            <div> 
                                <div className="card-body">
                                    {post.booleanTitle ? <div className='wd-po'>{post.title}</div>
                                                        : ""}
                                    {post.booleanContent
                                      ? <div className='wd-handle'>{post.content}</div> : ""}
                                </div>
                            </div> : ""}
                        </div>

                        <div className="wd-bookmark-icon pt-2">
                            <div className="wd-icon"><a href="#"><i
                                className="far fa-comment pe-2"></i>{post.replies}</a></div>
                            <div className="wd-icon"><a href="#"><i
                                className="far fa-arrow-alt-circle-right pe-2"></i>{post.retweets}
                            </a></div>
                            <div className="wd-icon"><a href="#"><i
                                className="fas fa-heart wd-heart-icon-color pe-2"></i>
                                <span className="wd-heart-icon-color">{post.likes} </span>
                            </a></div>
                            <div className="wd-icon"><a href="#"><i
                                className="fas fa-external-link-alt"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default PostItem

