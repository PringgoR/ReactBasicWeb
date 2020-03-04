import React, { Component } from "react";

class AwesomeMeet extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="box"><h4>Awesome meetup and event</h4>
            <h5>25 January 2019</h5>
            <h6>Hello, JavaScript & Node.js Ninjas!</h6>
            <h6>Get ready for our monthly meetup in JakartaJS! This will be our fifth meetup of 2018!</h6>
            <h6>The meetup format will contain some short stories and technical talks.</h6>
            <h6>If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements.</h6>
            <br></br>
            <h6>Remember to bring a photo ID to get through building security</h6>
            <h6>-----</h6>
            <h4>See you there!</h4>
            <h4>Best, Hengki, Giovanni, Sofian, Riza, Agung The Jakarta JS Organizers</h4>
            </div>
            </React.Fragment>
        );
    }
}

export default AwesomeMeet;