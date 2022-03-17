import React from "react";
/*
2. Convert the parameter list into an object destructor expression and provide default values
 */
const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: './images/nasa-logo-web-rgb_capture.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }) => {
    /*
    1. Remove $ symbols from inline expressions
     */
    return(
        <>
            <a className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <img src={who.avatarIcon} width="40px" className="rounded-circle"/>
                    </div>
                    <div className="col-6 wd-userName">
                        {who.userName} <i className="fas fa-check-circle"></i>
                        <div className="wd-handle">
                            @{who.handle}
                        </div>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-primary rounded-pill">
                            Follow
                        </button>
                    </div>
                </div>
            </a>
        </>
    );
}
export default WhoToFollowListItem;
