import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import NavBar from './Components/navbar';
import HeaderBox from './Components/Headerbox';
import NextMeetUp from './Components/NextMeetUp';
import AwesomeMeet from './Components/AwesomeMeet';
import AboutMeetUp from './Components/AboutMeetUp';
import ComeMeet from './Components/ComeMeet';
import Members from './Components/Members';
import Organizers from './Components/Organizers';
import PastMeetUps from './Components/PastMeetUps';
import Dates from './Components/Dates';
import Copyright from './Components/Copyright';
import JoinUsButtonCount from './Atoms/Button-JoinUs';
/*import HeaderBox from './Components/Headerbox'; Auto generated */
/*import NavBar from "./navbar.jsx"; */


function App() {
  return (
    <div> 
      <NavBar></NavBar>
      <JoinUsButtonCount></JoinUsButtonCount>
      <HeaderBox></HeaderBox>
      <NextMeetUp></NextMeetUp>
      <AwesomeMeet></AwesomeMeet>
      <AboutMeetUp></AboutMeetUp>
      <ComeMeet></ComeMeet>
      <Members></Members>
      <Organizers></Organizers>
      <PastMeetUps></PastMeetUps>
      <Dates></Dates>
      <Copyright></Copyright>
      </div>
        );
      }
    
export default App;
