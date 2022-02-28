const NavigationSidebar = (active) => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i>
                </a>
                <!-- continue the rest of the list -->
                <a href="../HomeScreen/home.html" style="text-decoration:none">
                ${active === 'home' ? `<a class="list-group-item active" href="../HomeScreen/home.html">` : `<a class="list-group-item" href="../HomeScreen/home.html">`}
                    <div class="row">
                        <div class="col-2">
                            <i class="fas fa-home"></i>
                        </div>
                        <div class="col-10 d-none d-xl-block">
                            Home
                        </div>
                    </div>
                </a>
                
                <a href="../ExploreScreen/explore.html" style="text-decoration:none">
                ${active === 'explore' ? `<a class="list-group-item active" href="../ExploreScreen/explore.html">` : `<a class="list-group-item" href="../ExploreScreen/explore.html">`}
                    <div class="row">
                        <div class="col-2">
                            <i class="fas fa-hashtag"></i>
                        </div>
                        <div class="col-10 d-none d-xl-block">
                            Explore
                        </div>
                    </div>
                </a>
                <a class="list-group-item" href="/">
                    <div class="row">
                        <div class="col-2">
                            <i class="far fa-bell"></i>
                        </div>
                        <div class="col-10 d-none d-xl-block">
                            Notifications
                        </div>
                    </div>
                </a>
                <a class="list-group-item" href="/">
                    <div class="row">
                        <div class="col-2">
                            <i class="far fa-envelope"></i>
                        </div>
                        <div class="col-10 d-none d-xl-block">
                            Messages
                        </div>
                    </div>
                </a>
                <a class="list-group-item" href="/">
                    <div class="row">
                        <div class="col-2">
                            <i class="far fa-bookmark"></i>
                        </div>
                        <div class="col-10 d-none d-xl-block">
                            Bookmarks
                        </div>
                    </div>
                </a>
                <a class="list-group-item" href="/">
                    <div class="row">
                        <div class="col-2">
                            <i class="fas fa-list"></i>
                        </div>
                        <div class="col-10 d-none d-xl-block">
                            Lists
                        </div>
                    </div>
                </a>
                <a class="list-group-item" href="/">
                    <div class="row">
                        <div class="col-2">
                            <i class="far fa-user"></i>
                        </div>
                        <div class="col-10 d-none d-xl-block">
                            Profile
                        </div>
                    </div>
                </a>
                <a class="list-group-item" href="/">
                    <div class="row">
                        <div class="col-2 ps-0">
                            <span class="fa-stack fa-1x">
                                <i class="fas fa-circle fa-stack-1x"></i>
                                <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse md-ellipsis-icon-color"></i>
                            </span>
                        </div>
                        <div class="col-10 d-none d-xl-block">
                            More
                        </div>
                    </div>
                </a>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
