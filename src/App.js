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
      task: {},
      isAddNewTask: true
    }
  }
  
  saveLS = () => {
    localStorage.setItem('tasks', JSON.stringify(data));
    window.location.reload();
  }

  componentDidMount() {
    const taskList = JSON.parse(localStorage.getItem('tasks'));
    this.setState({
      taskList
      // taskList: taskList
    })
  }

  addTask = (task) => {
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

  convertAddToEdit = () => {
    this.setState({
      isAddNewTask: false
    })
  }

  convertEditToAdd = () => {
    this.setState({
      isAddNewTask: true
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
          <div className="container-fluid">
            <div className="row">
              
              {/* PANEL */}
              <Controls 
                saveLS={this.saveLS}
                convertEditToAdd={this.convertEditToAdd}
              />

              {/* DISPLAY */}
              <TaskList 
                data={this.state.taskList}
                getTask={this.getTask}
                convertAddToEdit={this.convertAddToEdit}
              />

            </div>
          </div>
          {/* The Modal */}
          <Modal 
            addTask={this.addTask}
            task={this.state.task}
            isAddNewTask={this.state.isAddNewTask}
          />
          
        </div>

      </div>
    );
  }
}

export default App;
