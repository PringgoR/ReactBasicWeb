import React, { Component } from "react";

class HeaderBox extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="boxHeader">
                <div className="square"></div>
                <div>
                    <h3>Hacktiv8 Meetup</h3>
                    <h9>Location Jakarta, Indonesia</h9>
                    <div><h9>Members 1,078</h9>
                    </div>
                    <div>
                    <h9>Organizers Adhy Wiranata</h9>
                    </div><p></p>
                    <a href="#" className="btn btn-primary">Join Us</a>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default HeaderBox;