import React, { Component } from "react";

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
            <nav className="navbar">
                <span className="navbarBrand">QTemu</span>
                <span className="navbarText">Create Meetup</span>
                <span className="navbarText">Explore</span>
                <span className="navbarLink">Login</span>
            </nav>
            </React.Fragment>
        );
    }
}

export default NavBar;