import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import posts from "./posts.json";

const PostSummaryList = () => {
    return (
        <ul class="list-group mb-2">
            {
                posts.map(post => {
                    return(
                        <PostSummaryItem post={post}/>
                    );
                })
            }
        </ul>
    );
}

export default PostSummaryList