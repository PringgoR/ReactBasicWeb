import React from 'react';


class JoinUsButton extends React.Component {
    render() {
    return (
        <div className="Atoms-JoinUsButton">
        <button className="Atoms-JoinUsButton">Join Us</button>
        </div>
    );
    }
}

/*class JoinUsButton extends React.Component {
    constructor() {
        super()
        this.state = {
            number: 0,
            renderComponent: false,
            message: 'You cannot withdraw donations that you have not made'
        }
    }

    increment = () => {
        this.setState({
            number:this.state.number += 1,
            renderComponent: false
        })
    }

    decrement = () => {
        let number = this.state.number

        if(number < 1) {
            this.setState({
                renderComponent: true
            })
        } else {
            this.setState({
                number: this.state.number -= 1
            })
        }
    }

    render() {
        return (
            <div className="JoinUsButton">
                <div>Your total donation: ${ this.state.number }</div>
                <button className="JoinUsButtonCount" onClick={this.increment}>Donate $1</button>
                <button className="JoinUsButtonCount" onClick={this.decrement}>Refund $1</button>
                {
                    this.state.renderComponent ? <div>{this.state.message}</div> : null
                }
            </div>
        );
    }
} */

export default JoinUsButton;