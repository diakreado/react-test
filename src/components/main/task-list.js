import React, { Component } from 'react';
import '../../App.css';
import './main-content.css';
import Task from './task';
import dataStorage from '../../data';

class TaskList extends Component {
  constructor() {
    super();
    this.tasks = dataStorage.map(data => <Task key={data.id} card={data} />);
  }
  render() {
    return (
        <div className="task-list">
          {this.tasks}
        </div>
    )
  }
}

export default TaskList;
