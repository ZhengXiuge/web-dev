import React from "react";
import {Link} from "react-router-dom";
import "./profile.css"
import {useSelector} from "react-redux";
// import profileReducer from "../reducers/profile-reducer";

const Profile = () => {
    const profile = useSelector(state => state.profile);
    // console.log(profile);
    return(
        <div className="mb-4">
            <div className="row mb-1">
                <div className="col-1">
                    <Link to="/tuiter/home"><i className="far fa-arrow-alt-circle-left"></i></Link>
                </div>
                <div className="col-11">
                    <span className="wd-profile-name">{profile.firstName} {profile.lastName}</span>
                    <div className="wd-profile-tweet-number">
                        5,196 Tweets
                    </div>
                </div>
            </div>

            <div>
                <img src={profile.bannerPicture} alt="banner" height="200px" width="100%"/>
            </div>

            <div className="row">
                <div className="col ms-2" style={{position:'relative'}}>
                    <img src={profile.profilePicture} alt="avatar" height="120px" className="rounded-circle"
                         style={{position:'absolute', border:'solid 5px black', top:'-50px', left:'10px'}}/>
                </div>

                <div className="col">
                    <Link to="/tuiter/edit">
                        <button className="btn btn-dar rounded-pill border-dark float-end mt-2 text-white"
                        style={{fontSize:'14px'}}>
                            Edit Profile
                        </button>
                    </Link>
                </div>
            </div>

            <div className="ms-2 mt-2" style={{position:'relative', top:'15px'}}>
                <div>
                    <span className="wd-profile-name">{profile.firstName} {profile.lastName}</span>
                    <div className="wd-profile-tweet-number">
                        @{profile.handle}
                    </div>
                </div>

                <span className="wd-profile-bio">{profile.bio}</span>

                <div className="row" style={{fontSize:"small"}}>
                    <div className="col-3 ">
                        <i className="fas fa-map-marker-alt"></i>
                        <span className="p-2">{profile.location}</span>
                    </div>
                    <div className="col-3">
                        <i className="fas fa-birthday-cake"></i>
                        <span className="p-2">Born {profile.dateOfBirth}</span>
                    </div>
                    <div className="col-3">
                        <i className="fas fa-calendar-alt"></i>
                        <span className="p-2">Joined {profile.dateJoined}</span>
                    </div>
                </div>

                <div className="row" style={{fontSize:"small"}}>
                    <div className="col-3">
                        <span className="fw-bold text-white">{profile.followingCount}</span>
                        <span className="p-2">Following</span>
                    </div>
                    <div className="col-3">
                        <span className="fw-bold text-white">{profile.followersCount}</span>
                        <span className="p-2">Followers</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile;

