import React, {useState} from "react";
// import profiles from "../data/profiles";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const EditProfile = () => {

    const profile = useSelector(state => state.profile);

    let[firstName, setFirstName] = useState(profile.firstName)
    let[lastName, setLastName] = useState(profile.lastName)
    let[bio, setBio] = useState(profile.bio)
    let[location, setLocation] = useState(profile.location)
    let[website, setWebsite] = useState(profile.website)
    let[dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth)

    const dispatch = useDispatch();
    const firstNameChangeHandler = (event) => {
        const firstName = event.target.value;
        // const newFirstName = {newFirstName: firstName};
        setFirstName(firstName);
    }

    const lastNameChangeHandler = (event) => {
        const lastName = event.target.value;
        setLastName(lastName);
    }

    const bioChangeHandler = (event) => {
        const bio = event.target.value;
        setBio(bio);
    }

    const locationChangeHandler = (event) => {
        const location = event.target.value;
        setLocation(location);
    }

    const websiteChangeHandler = (event) => {
        const website = event.target.value;
        setWebsite(website);
    }

    const dateOfBirthChangeHandler = (event) => {
        const dateOfBirth = event.target.value;
        setDateOfBirth(dateOfBirth);
    }

    const saveClickHandler = () => {
        const newProfile = {
            ...profile,
            firstName,
            lastName,
            bio,
            location,
            website,
            dateOfBirth,
        }
        dispatch({type:'save', profile: newProfile})
    }

    return(
        <div>
            <div className="row mb-3">
                <div className="col-1">
                    <Link to="/tuiter/profile"><i className="far fa-times-circle"></i></Link>
                </div>
                <div className="col-10">
                    <span className="wd-profile-name">Edit Profile</span>
                </div>
                <div className="col-1">
                    <Link to="/tuiter/profile">
                        <button className="btn btn-light rounded-pill bg-white me-2 float-end small"
                                style={{fontSize:'12px'}} onClick={saveClickHandler}>
                            <span className="fw-bold text-black">Save</span>
                        </button>
                    </Link>
                </div>
            </div>

            <div>
                <img src={profile.bannerPicture} alt="banner" height="200px" width="100%"/>
            </div>

            <div className="ms-2" style={{position:'relative'}}>
                <img src={profile.profilePicture} alt="avatar" height="120px" className="rounded-circle"
                     style={{position:'absolute', border:'solid 5px black', top:'-58px', left:'-2px'}}/>

                <div style={{position:'relative', top:'75px'}}>
                    <div className="mt-2">
                        <label htmlFor="fistName">First Name</label>
                        <textarea className="bg-black text-white" id="fistName" style={{width: "100%"}}
                                  value={firstName} onChange={firstNameChangeHandler}>
                                {/*{profiles.firstName}*/}
                        </textarea>
                    </div>

                    <div className="mt-2">
                        <label htmlFor="lastName">Last Name</label>
                        <textarea className="bg-black text-white" id="lastName" style={{width: "100%"}}
                                  value={lastName} onChange={lastNameChangeHandler}>
                        </textarea>
                    </div>

                    <div className="mt-2">
                        <label htmlFor="bio">Bio</label>
                        <textarea className="bg-black text-white" id="bio" style={{width: "100%"}}
                                  value={bio} onChange={bioChangeHandler}>
                        </textarea>
                    </div>

                    <div className="mt-2">
                        <label htmlFor="location">Location</label>
                        <textarea className="bg-black text-white" id="location" style={{width: "100%"}}
                                  value={location} onChange={locationChangeHandler}>
                        </textarea>
                    </div>

                    <div className="mt-2">
                        <label htmlFor="website">Website</label>
                        <textarea className="bg-black text-white" id="website" style={{width: "100%"}}
                                  value={website} onChange={websiteChangeHandler}>
                        </textarea>
                    </div>

                    <div className="mt-2">
                        <label htmlFor="dateOfBirth">Birth Date</label>
                        <textarea className="bg-black text-white" id="dateOfBirth" style={{width: "100%"}}
                                  value={dateOfBirth} onChange={dateOfBirthChangeHandler}>
                        </textarea>
                    </div>

                </div>

            </div>

        </div>
    )

}

export default EditProfile;