import React, { Component } from 'react';
import './App.css';

// import component
import Controls from './Components/Controls/Controls';
import TaskList from './Components/TaskList/TaskList';
import Modal from './Components/Modal/Modal';

// import data
import data from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
      task: {}
    }
  }
  
  saveLS = () => {
    localStorage.setItem('tasks', JSON.stringify(data));
    window.location.reload();
  }

  componentDidMount() {
    const taskList = JSON.parse(localStorage.getItem('tasks'));
    console.log('componentDidMount')
    this.setState({
      taskList
      // taskList: taskList
    })
  }

  addTask = (task) => {
    console.log(task)
    let taskList = JSON.parse(localStorage.getItem('tasks'))
    taskList.push(task);
    localStorage.setItem('tasks', JSON.stringify(taskList));
    this.setState({
      taskList
      // taskList: taskList
    })
  }

  getTask = (task) => {
    this.setState({
      task
    })
  } 

  render() {
    console.log('render');
    return (
      <div className="App">
        <div>
          <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
          <div className="container-fluid">
            <div className="row">
              
              {/* PANEL */}
              <Controls 
                saveLS={this.saveLS}
              />

              {/* DISPLAY */}
              <TaskList 
                data={this.state.taskList}
                getTask={this.getTask}
              />

            </div>
          </div>
          {/* The Modal */}
          <Modal 
            addTask={this.addTask}
            task={this.state.task}
          />
          
        </div>

      </div>
    );
  }
}

export default App;
