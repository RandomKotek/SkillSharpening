import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            clicked: !this.state.clicked
        });
    }

    render() {
        return(
            <div id="block" onClick={this.handleClick}>
                Click ME!
                {this.state.clicked? <p>on</p> : <p>off</p>}
            </div>
        );
    }
}
