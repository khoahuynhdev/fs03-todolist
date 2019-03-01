import React, { Component } from 'react';
import './App.css';

// import component
import Controls from './Components/Controls/Controls';
import TaskList from './Components/TaskList/TaskList';
import Modal from './Components/Modal/Modal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
          <div className="container-fluid">
            <div className="row">
              
              {/* PANEL */}
              <Controls />


              {/* DISPLAY */}
              <TaskList />

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
