import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
        <div class="row mb-2">
            <!-- search field and cog -->
            <div class="col-11">
                <i class="fas fa-search position-absolute ps-2 pt-2 wd-icon-color"></i>

                <input id="text-field-search" placeholder="Search Tuiter"
                       class="wd-search-bar ps-5"/><br/>
            </div>

            <div class="col-1 ps-0">
                <a href="../explore-setting.html"><i class="fas fa-cog fa-2x"></i></a>
            </div>
        </div>
        
        <ul class="nav mb-2 nav-tabs">
            <!-- tabs -->
            <li class="nav-item">
                <a class="nav-link active" href="../for-you.html">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
                <a class="nav-link" href="../entertainment.html">Entertainment</a>
            </li>
        </ul>
        
        <!-- image with overlaid text -->
        <div class="position-relative mb-2">
            <img src="../images/Starship.jpg" width="100%">
            <div class="position-absolute bottom-0 start-0 ps-2 pb-2 wd-img-font">SpaceX' Starship</div>
        </div>
            
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
