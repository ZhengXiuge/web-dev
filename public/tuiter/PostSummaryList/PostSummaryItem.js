const PostSummaryItem = (post) => {
    return(`
        <a class="list-group-item" href="/">
            <div class="row align-items-center">
                <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-9">
                    <div class="wd-topic">
                        ${post.topic}
                    </div>
                    <div class="wd-userName">
                        ${post.userName} <i class="fas fa-check-circle"></i>
                        <span class="wd-time"> - ${post.time}</span><br/>
                        ${post.title}
                    </div>
                    <div class="wd-topic">
                        ${post.tweets} Tweets
                    </div>
                </div>
                <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3">
                    <img src=${post.image} width="60px" class="rounded-2">
                </div>
            </div>
        </a>
    `);
}
export default PostSummaryItem