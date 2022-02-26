import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./whos.js"

const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
                <a class="list-group-item wd-userName" href="/">
                    Who to follow
                </a>
            <!-- continue here -->
                ${
                    whos.map(who => {
                        return(WhoToFollowListItem(who));
                    }).join('')
                }
            </ul>
`); }
export default WhoToFollowList;
