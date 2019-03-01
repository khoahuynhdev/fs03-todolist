import React, { Component } from 'react';

class Modal extends Component {
    render() {
        return (
          <div className="modal fade" id="modalTask">
            <div className="modal-dialog modal-lg">
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
                    <input type="text" className="form-control" id="taskName" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Mô tả:</label>
                    <textarea className="form-control" rows={2} id="description" defaultValue={""} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="priority">Độ ưu tiên:</label>
                    <select className="form-control" id="priority">
                      <option>Thấp</option>
                      <option>Trung bình</option>
                      <option>Cao</option>
                    </select>
                  </div>
                  <label>Người thực hiện:</label>
                  <br />
                  <div className="form-check-inline">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" defaultValue />Nghĩa Văn
                    </label>
                  </div>
                  <div className="form-check-inline">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" defaultValue />Minh Tuấn
                    </label>
                  </div>
                  <div className="form-check-inline">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" defaultValue />Trung Hiếu
                    </label>
                  </div>
                  <div className="form-check-inline">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" defaultValue />Tấn Khải
                    </label>
                  </div>
                  <br /><br />
                  <label >Nhãn:</label>
                  <br />
                  <div className="form-check-inline">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" defaultValue />Frontend
                    </label>
                  </div>
                  <div className="form-check-inline">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" defaultValue />Backend
                    </label>
                  </div>
                  <div className="form-check-inline">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" defaultValue />API
                    </label>
                  </div>
                  <div className="form-check-inline">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" defaultValue />Issue
                    </label>
                  </div>
                </div>
                {/* Modal footer */}
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Modal;