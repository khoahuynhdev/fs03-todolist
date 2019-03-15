import React, { Component } from 'react';
import TaskItem from './TaskItem';
// import components
import FilterString from '../Controls/FilterString';
import { connect } from 'react-redux';
class TaskList extends Component {
    render() {
      let taskItemElm = [];
      if(this.props.taskList){
        taskItemElm = this.props.taskList.map((item, index) => {
          return <TaskItem 
            key={index} // key không phải props =
            item={item}
            index={index}
            getTask={this.props.getTask}
            convertAddToEdit={this.props.convertAddToEdit}
          />
        })
      }
      
        return (
            <div className="col-md-9 px-0">
                <div className="container-fluid px-0">
                  <div className="row header header--right d-flex align-items-center mx-0">
                    <div className="col-md-6">
                      <div className=" d-flex justify-content-between">
                        <h3 className="text-left ml-2 ">Danh sách công việc</h3>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <FilterString />
                    </div>
                    
                  </div>
                </div>
                <div className="px-3">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Công việc</th>
                        <th className="text-center">Nhãn</th>
                        <th className="text-center">Độ ưu tiên</th>
                        <th className="text-center">Người thực hiện</th>
                        <th className="text-center">Xử lý</th>
                        <th className="text-center">Tình trạng</th>
                      </tr>
                    </thead>
                    <tbody>

                      {taskItemElm}
                      
                    </tbody>
                  </table>
                </div>
              </div>
        );
    }
}

// connect
// state -> props: get only data
// dispatch -> props: map an action

const mapStateToProps = (state) => {
  return {
    taskList: state.taskListReducer
  };
}
// const mapDispatchToProps = (dispatch) => {
//   return {

//   };
// }
export default connect(mapStateToProps)(TaskList);