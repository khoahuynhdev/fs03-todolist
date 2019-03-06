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
      taskList: []
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

  // componentWillMount(){
  //   console.log('componentWillMount')
  // }
  

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
              />

            </div>
          </div>
          {/* The Modal */}
          <Modal />
          
        </div>

      </div>
    );
  }
}

export default App;
