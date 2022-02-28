const PostItem = (post) => {
    return(`
        <div class="border-bottom border-secondary pt-2 pb-2">
            <div class="row">
                <div class="col-1">
                    <img src=${post.avatar} width="35px" class="rounded-circle">
                </div>
                <div class="col-10 wd-userName">
                    ${post.userName} <i class="fas fa-check-circle"></i>
                    <span class="wd-handle"> @${post.handle} • ${post.time}</span>
                    <div class="wd-po">
                        ${post.po}
                    </div>
                    
                    <div class="card bg-transparent border-secondary mt-2">
                        <img src=${post.image} class="card-img-top border-bottom border-secondary"/>
                        ${post.postContent ? `
                            <div> 
                                <div class="card-body">
                                    ${post.booleanTitle ? `<div class='wd-po'>${post.title}</div>` : ""}
                                    ${post.booleanContent ? `<div class='wd-handle'>${post.content}</div>` : ""}
                                </div>
                            </div>`: ""}
                    </div>
                    
                    <div class="wd-bookmark-icon pt-2">
                        <div class="wd-icon"><a href="#"><i class="far fa-comment pe-2"></i>${post.replies}</a></div>
                        <div class="wd-icon"><a href="#"><i class="far fa-arrow-alt-circle-right pe-2"></i>${post.retweets}</a></div>
                        <div class="wd-icon"><a href="#"><i class="fas fa-heart wd-heart-icon-color pe-2"></i>
                            <span class="wd-heart-icon-color">${post.likes} </span>
                        </a></div>
                        <div class="wd-icon"><a href="#"><i class="fas fa-external-link-alt"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
    `);
}
export default PostItem

