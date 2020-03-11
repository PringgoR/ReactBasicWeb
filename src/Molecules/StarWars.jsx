import React from 'react';
import axios from 'axios';


class starWars extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                people: [],
                loading: false
            };
        }
    
componentDidMount() {
    this.setState({ loading: true })
    axios
    // .then(response => {
    //   this.setState({
    //     listActor: response.data.results
    //   })
    // })
    .get("https://swapi.co/api/people")
    .then(response => this.setState({ people: response.data.results })) ////response.data shows until People. And results are the arrays for the result from swapi (starwars)
    .then(response => {
        this.setState({ loading: false })
    });
    }

    render() {
        console.log(this.state)
        return (
            <div>
                {
                    this.state.loading ? //When it is loading, show the heading below
                        <h1>Fetching data...</h1>
                    :                    //Then what to do
                        <ul>{ this.state.people.map(p =>   //Output the result back in list form
                        <li><b>Name: </b>{ p.name } <p><b>Skin Color:</b> { p.skin_color }</p></li>)} </ul>   //Heading above not define, so it will be gone
                }
            </div>
        // <div>
      //   {
      //     this.state.listActor.ma
      //   }
      // </div>
    );
}
// render() {       //Working already
//   // console.log(this.state.people)
// 	// return  <h1>Fetching data...</h1>;
//   // }
}

export default starWars;