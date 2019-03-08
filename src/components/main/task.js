import React, { Component } from 'react';
import '../../App.css';
import './main-content.css';


class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: props.card.imgUrl,
            text: props.card.text
        };
    }

    lol() {
        console.log('lol');        
    }
    
    render() {      
        return (
            <div className="task">
                <img alt="lol" align="center" src={this.state.img}/>
                <p>Hello, {this.state.text}!</p>
                <br />
                <button onClick={this.lol}>Boooo!</button>
            </div>
        )
    }
}

export default Task;
