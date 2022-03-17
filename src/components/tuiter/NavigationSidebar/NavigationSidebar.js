/*
1. The first thing you need to do is to import the React.js library. All React components must at least import this one library.
 */
import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    /*
    2. Object deconstructed parameter
    Convert all parameters into an object deconstructor and provide initial default values.
     */
    {
        active = 'explore'
    }) => {
    /*
    3. React function components return HTML elements, not strings
    Previous components were rendered with string manipulation. Using JSX and React.js we can instead render HTML elements. Remove the backticks ( ` ) quotations in the return statement.
     */
    return(
        /*
        4. React function components return a single HTML element
        React.js function components can only return a single HTML element. If the function needs to return more than one element, then they need to be wrapped with a parent element. Most common element is a simple DIV. Alternatively you can use fragment syntax which looks like tags with no names <></>
         */
        /*
        5. Replace class with className
        The HTML class attribute is commonly used to associate CSS transformation rules to an HTML element. In JavaScript class is a keyword so we can't use it. Instead we use className which will be transpiled into class in the resulting DOM. Replace all class attributes with className.
         */
        /*
        6. Embedded expressions
        If an attribute value is dynamic then refactor it to use string template expressions instead as shown below.
         */
        <div>
            <div className="list-group">
                <Link to="/" className="list-group-item">
                    <i className="fab fa-twitter"></i>
                </Link>

                <Link to="/tuiter/home"
                      className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                    <i className="fa fa-home"></i>
                    <span className="d-none d-xl-inline ps-2">Home</span>
                </Link>
                <Link to="/tuiter/explore"
                      className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                    <i className="fa fa-hashtag"></i>
                    <span className="d-none d-xl-inline ps-2">Explore</span>
                </Link>
                <a className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}
                   href="notifications.html">
                    <i className="fa fa-bell"></i>
                    <span className="d-none d-xl-inline ps-2">Notifications</span>
                </a>
                <a className={`list-group-item${active === 'messages' ? 'active' : ''}`}
                   href="messages.html">
                    <i className="fa fa-envelope"></i>
                    <span className="d-none d-xl-inline ps-2">Messages</span>
                </a>
                <a className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}
                   href="bookmarks.html">
                    <i className="fa fa-bookmark"></i>
                    <span className="d-none d-xl-inline ps-2">Bookmarks</span>
                </a>
                <a className={`list-group-item ${active === 'lists' ? 'active' : ''}`}
                   href="lists.html">
                    <i className="fa fa-list"></i>
                    <span className="d-none d-xl-inline ps-2">Lists</span>
                </a>
                <a className={`list-group-item ${active === 'profile' ? 'active' : ''}`}
                   href="profile.html">
                    <i className="fa fa-user"></i>
                    <span className="d-none d-xl-inline ps-2">Profile</span>
                </a>
                <a className={`list-group-item ps-0${active === 'more' ? 'active' : ''}`}
                   href="more.html">
                    <span className="fa-stack fa-1x">
                        <i className="fa fa-circle fa-stack-1x"></i>
                        <i className="fa fa-ellipsis-h fa-inverse fa-stack-1x"></i>
                    </span>
                    <span className="d-none d-xl-inline">More</span>
                </a>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </div>
    );
}
export default NavigationSidebar;
