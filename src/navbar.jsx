import React, { Component } from "react";

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand">QTemu</a>
                <a className="navbar-text">Create Meetup</a>
                <a className="navbar-text">Explore</a>
                <a href="navbar-text">Login</a>
            </nav>
            </React.Fragment>
        );
    }
}

export default NavBar;