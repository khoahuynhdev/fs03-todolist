import React, { Component } from 'react';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
      description: '',
      priority: '',
      memberIDArr: [],
      labelArr: [],
      status: 1
    }
  }


  onSubmit = () => {

  }

  onChange = (e) => {
    console.log(e.target.name + " " + e.target.value)
    this.setState({
      // taskName: e.target.value,
      // description: e.target.value
      // computed ES6
      [e.target.name]: e.target.value
    })
  }

  membersChange = (newMembers) => {
    this.setState({
      memberIDArr: newMembers
    });
  }

  labelsChange = (newLabels) => {
    this.setState({
      labelArr: newLabels
    });
  }


  render() {
    return (
      <div className="modal fade" id="modalTask">
        <div className="modal-dialog modal-lg">
          <form onSubmit={this.onSubmit} >
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Thêm công việc</h4>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="taskName">Tên công việc:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="taskName"
                    onChange={this.onChange}
                    name="taskName"
                    value={this.state.taskName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Mô tả:</label>
                  <textarea
                    className="form-control"
                    rows={2}
                    id="description"
                    onChange={this.onChange}
                    name="description"
                    value={this.state.description}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="priority">Độ ưu tiên:</label>
                  <select
                    className="form-control"
                    id="priority"
                    name="priority"
                    onChange={this.onChange}
                    value={this.state.priority}
                  >
                    <option value={-1} >Chọn độ ưu tiên</option>
                    <option value={3}>Thấp</option>
                    <option value={2}>Trung bình</option>
                    <option value={1}>Cao</option>
                  </select>
                </div>
                <label>Người thực hiện:</label>
                <br />

                <CheckboxGroup
                  checkboxDepth={2} // This is needed to optimize the checkbox group
                  name="memberIDArr"
                  value={this.state.memberIDArr}
                  onChange={this.membersChange}>

                  <label><Checkbox value="user_1" /> Van A</label>
                  <label><Checkbox value="user_2" /> John</label>
                  <label><Checkbox value="user_3" /> Trump</label>
                  <label><Checkbox value="user_4" /> Irzon man</label>
                </CheckboxGroup>

                <br /><br />
                <label >Nhãn:</label>
                <br />
                <CheckboxGroup
                  checkboxDepth={2} // This is needed to optimize the checkbox group
                  name="labelArr"
                  value={this.state.labelArr}
                  onChange={this.labelsChange}>

                  <label><Checkbox value="Frontend" /> Frontend</label>
                  <label><Checkbox value="Backend" /> Backend</label>
                  <label><Checkbox value="API" /> API</label>
                  <label><Checkbox value="Issue" /> Issue</label>
                </CheckboxGroup>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;