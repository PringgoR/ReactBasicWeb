import React from 'react';
import './App.css';
import NavBar from './Components/navbar';
import HeaderBox from './Organisms/Headerbox';
import NextMeetUp from './Components/NextMeetUp';
import AwesomeMeet from './Molecules/AwesomeMeet';
import AboutMeetUp from './Components/AboutMeetUp';
import ComeMeet from './Molecules/ComeMeet';
import Members from './Components/Members';
import Organizers from './Molecules/Organizers';
import PastMeetUps from './Components/PastMeetUps';
import Dates from './Molecules/Dates';
import Copyright from './Components/Copyright';
// import StarWars from './Molecules/StarWars';

function App() {
  return (
    <div> 
      <NavBar></NavBar>
      <HeaderBox></HeaderBox>
      {/* <Hacktiv8Meetup></Hacktiv8Meetup> */}
      <NextMeetUp></NextMeetUp>
      <AwesomeMeet></AwesomeMeet>
      <AboutMeetUp></AboutMeetUp>
      <ComeMeet></ComeMeet>
      <Members></Members>
      <Organizers></Organizers>
      <PastMeetUps></PastMeetUps>
      <Dates></Dates>
      {/* <StarWars></StarWars> //Turn off Starwars display */}
      <Copyright></Copyright>
      </div>
        );
      }
    
export default App;
