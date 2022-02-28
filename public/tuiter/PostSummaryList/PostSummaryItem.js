const PostSummaryItem = (post) => {
    return(`
        <a class="list-group-item" href="/">
            <div class="row align-items-center">
                <div class="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9">
                    <div class="wd-topic">
                        ${post.topic}
                    </div>
                    <div class="wd-userName">
                        ${post.userName} <i class="fas fa-check-circle"></i>
                        <span class="wd-time"> - ${post.time}</span><br/>
                        ${post.title}
                    </div>
                    ${post.booleanTweet ? `<div class='wd-topic'>${post.tweets} Tweets </div>` : ""}
                    
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <img src=${post.image} width="60px" class="rounded-2 float-end">
                </div>
            </div>
        </a>
    `);
}
export default PostSummaryItem