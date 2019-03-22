import React, { Component } from 'react';
import Controls from './Controls/Controls';
import TaskList from './TaskList/TaskList';
import Modal from './Modal/Modal';


import data from '../data';
class Secret extends Component {
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
    this.getDataOnLS();
  }
  getDataOnLS = () => {
    const localData = localStorage.getItem('tasks');
    if (localData) {
      const taskList = JSON.parse(localStorage.getItem("tasks"));
      this.setState({ taskList });
    };
  };


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

  editTask = (task) => {
    console.log("Edit: ", task)
    // Lấy data từ localstorage
    let taskList = JSON.parse(localStorage.getItem('tasks'))

    // tìm index trong taskList
    const index = taskList.findIndex(elm => elm.id === task.id);
    taskList[index] = task

    // update LS
    localStorage.setItem('tasks', JSON.stringify(taskList));

    // hiển giao diện
    this.setState({
      taskList: taskList
    })
  }
  render() {
    return (
      <div>
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
            editTask={this.editTask}
          />
          
        </div>
      </div>
    );
  }
}

export default Secret;