const WhoToFollowListItem = (who) => {
    return(`
        <a class="list-group-item" href="/">
            <div class="row">
                <div class="col-2">
                    <img src=${who.avatarIcon} width="35px" class="rounded-circle">
                </div>
                <div class="col-6 wd-userName">
                    ${who.userName} <i class="fas fa-check-circle"></i>
                    <div class="wd-handle">
                        @${who.handle}
                    </div>
                </div>
                <div class="col-4">
                    <button class="btn btn-primary rounded-pill">
                        Follow
                    </button>
                </div>
            </div>
        </a>
    `);
}
export default WhoToFollowListItem;
