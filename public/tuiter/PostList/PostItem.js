const PostItem = (post) => {
    return(`
        <div class="border">
            <div class="row">
                <div class="col-1">
                    <img src=${post.avatar} width="35px" class="rounded-circle">
                </div>
                <div class="col-10 wd-userName">
                    ${post.userName} <i class="fas fa-check-circle"></i>
                    <span class="wd-handle">@${post.handle} • ${post.time}</span>
                    <div class="wd-po">
                        @${post.po}
                    </div>
                    
                    <div class="border">
                        <img src=${post.image} width="445px" height="264px"/>
                        <div class="wd-po">
                            ${post.title}
                        </div>
                        <div class="wd-handle">
                            ${post.content}
                        </div>
                    </div>
                    
                    <div class="wd-icon-color pt-2">
                        <div class="wd-icon"><a href="#"><i class="far fa-comment pe-2"></i>${post.replies}</a></div>
                        <div class="wd-icon"><a href="#"><i class="fa-solid fa-retweet pe-2"></i>${post.retweets}</a></div>
                        <div class="wd-icon"><a href="#"><i class="fa-solid fa-heart wd-heart-icon-color pe-2"></i>
                            <span class="wd-heart-icon-color">${post.likes}</span>
                        </a></div>
                        <div class="wd-icon"><a href="#"><i class="fa-solid fa-arrow-up-from-bracket"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
    `);
}
export default PostItem