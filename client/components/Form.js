import React, {Component} from 'react'
import '../style/Form.css'
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <form action="/thank-you" method="POST">
                Name:
                <input type="text" name="name" maxLength="15"/><br/>
                Favorite Colour:
                <input type="color" name="favcolour"/><br/>
                Select your favorite tree: <br/>
                Spruce <input type="radio" name="trees" value="Spruce"/><br/>
                Oak <input type="radio" name="trees" value="Oak"/><br/>
                <strong>Sakura</strong> <input type="radio" name="trees" value="Sakura"/><br/>
                <input type="submit" name="treesSubmit" value="Submit"/>
            </form>
        );
    }
}
export default Form;
