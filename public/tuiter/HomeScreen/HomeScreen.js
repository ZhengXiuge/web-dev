import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
import PostList from "../PostList/PostList";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar()}
            </div> 
            <div class="col-4 col-md-0 col-lg-4 col-xl-4 d-sm-none d-md-none d-lg-block">
                ${PostList()}
            </div>
            <div class="col-6 col-sm-10 col-md-10 col-lg-7 col-xl-6">
                ${PostSummaryList()}
            </div>
        </div>
    `);
})($);