import React, { Component } from 'react';
import '../../App.css';
import './main-content.css';


class Task extends Component {
    render() {      
        return (
            <div className="task">
                <img align="center" src={this.props.card.imgUrl}/>
                <p>Hello, {this.props.card.text}!</p>
            </div>
        )
    }
}

export default Task;
