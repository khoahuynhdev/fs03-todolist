import React, { Component } from 'react';
import './App.css';

// import component
import Controls from './Components/Controls/Controls';
import TaskList from './Components/TaskList/TaskList';
import Modal from './Components/Modal/Modal';

// import data
import data from './data';

class App extends Component {

  saveLS = () => {
    localStorage.setItem('tasks', JSON.stringify(data));
  }

  render() {
    console.log(data);
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
                data={data}
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
