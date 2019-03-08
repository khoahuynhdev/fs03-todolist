import React, { Component } from 'react';

// import components
import AddNewTask from './AddNewTask'
import FilterProgress from './FilterProgress';
import FilterLabel from './FilterLabel';
import FilterPriority from './FilterPriority';
import Sort from './Sort';
import SaveDataOnLS from './SaveDataOnLS'

class Controls extends Component {
    render() {
        return (
            <div className="col-md-3 text-center px-0">
                <div className="header header--left d-flex align-items-center">
                  <img src="./img/user_1.jpg" className="ml-2 user" alt="user" />
                  <h3 className="text-white d-inline font-weight-light ml-2">Lê Quang Song</h3>
                </div>
                
                <AddNewTask 
                    convertEditToAdd={this.props.convertEditToAdd}
                />
                <SaveDataOnLS 
                    saveLS={this.props.saveLS}
                />
                {/* Filter */}
                <div className="px-3">
                  
                    <FilterProgress />

                    <FilterLabel />

                    <FilterPriority />

                    <Sort />
                </div>
              </div>
        );
    }
}

export default Controls;