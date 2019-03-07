import React, { Component } from 'react';
import '../../App.css';
import './main-content.css';

const nameList = ['Bob', 'Dilan', 'Dick'];

class TaskList extends Component {
  render() {
    return (
        <div className="task-list">
          <div className="task">
            <input type="checkbox" id="check0" />
            <label htmlFor="check0" >Placeholder text here {nameList[0]}</label>
          </div>

          <div className="task">
            <input type="checkbox" id="check1" />
            <label htmlFor="check1" >Placeholder text here {nameList[1]}</label>
          </div>

          <div className="task">
            <input type="checkbox" id="check2" />
            <label htmlFor="check2" >Placeholder text here {nameList[2]}</label>
          </div>
        </div>
    )
  }
}

export default TaskList;
