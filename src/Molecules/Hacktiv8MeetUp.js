import React from 'react';
// import style from '../Molecules/style.css'
import JoinUsButton from '../Atoms/JoinUsButton';

class hackMeetup extends React.Component {
    render() {
        return (
        <React.Fragment>
        <div className="square"></div> 
         <div>
            <h3>Hacktiv8 Meetup</h3>
            <h9>Location Jakarta, Indonesia</h9>
            <div><h9>Members 1,078</h9></div>
            <div>
            <h9>Organizers Adhy Wiranata</h9>
            </div>
            <JoinUsButton></JoinUsButton>
            <p></p> 
         </div>
         </React.Fragment>
        );
    }
}
    
export default hackMeetup;