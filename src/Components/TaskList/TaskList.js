import React, { Component } from 'react';

class TaskList extends Component {
    render() {
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
                      <div className="form-group text-left my-0">
                        <input type="text" className="form-control" placeholder="Tìm kiếm công việc" />
                      </div>
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
                      <tr>
                        <td className="text-center">1</td>
                        <td className="text-center">Soạn ReactJS</td>
                        <td className="text-center">
                          <i className="fa fa-circle" style={{color: '#389E0D'}} />
                          <i className="fa fa-circle" style={{color: '#13C2C2'}} />
                        </td>
                        <td className="text-danger font-weight-bold text-center">Cao</td>
                        <td className="text-center">
                          <img src="./img/user_2.jpg" className="user" alt />
                          <img src="./img/user_3.jpg" className="user" alt />
                        </td>
                        <td className="text-center">
                          <button type="button" className="btn btn-outline-primary">Sửa</button>
                          <button type="button" className="btn btn-outline-success">Xong</button>
                          <button type="button" className="btn btn-outline-danger">Xóa</button>
                        </td>
                        <td className="text-center">
                          <i className="fa fa-check-square-o mr-2" />
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">2</td>
                        <td className="text-center">Soạn Python</td>
                        <td className="text-center">
                          <i className="fa fa-circle" style={{color: '#722ED1'}} />
                          <i className="fa fa-circle" style={{color: '#CF1322'}} />
                          <i className="fa fa-circle" style={{color: '#389E0D'}} />
                        </td>
                        <td className="text-danger font-weight-bold text-center">Cao</td>
                        <td className="text-center">
                          <img src="./img/user_3.jpg" className="user" alt />
                        </td>
                        <td className="text-center">
                          <button type="button" className="btn btn-outline-primary">Sửa</button>
                          <button type="button" className="btn btn-outline-success">Xong</button>
                          <button type="button" className="btn btn-outline-danger">Xóa</button>
                        </td>
                        <td className="text-center">
                          <i className="fa fa-check-square-o mr-2" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
        );
    }
}

export default TaskList;