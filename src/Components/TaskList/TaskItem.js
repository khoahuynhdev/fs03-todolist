import React, { Component } from 'react';

class TaskItem extends Component {

    getLabelColor = (label) => {
        switch (label) {
            case "Frontend":
                return "#389E0D"
            case "Backend":
                return "#722ED1"
            case "API":
                return "#13C2C2"
            case "Issue":
                return "#CF1322"
            default:
                return ""
        }
    }

    getPriority = (number) => {
        switch (number) {
            case 1:
                return 'Cao'
            case 2:
                return 'Trung bình'
            case 3:
                return 'Thấp'
            default:
                return null;
        }
    }

    getPriorityClass = (number) => {
        switch (number) {
            case 1:
                return 'text-danger'
            case 2:
                return 'text-success'
            case 3:
                return 'text-info'
            default:
                return '';
        }
    }

    getProgressIcon = (number) => {
        switch (number) {
            case 1:
                return "fa-hourglass-start"
            case 2:
                return "fa-anchor"
            case 3:
                return "fa-check-square-o"
            case 4:
                return "fa-trash-o"
        
            default:
                return ""
        }
    }

    render() {
        // const index = this.props.index;
        // const item = this.props.item;

        // destructuring trong ES6
        const {index, item} = this.props

        // render label
        const labelElm = item.labelArr.map((label, index) => {
            return <i 
                key={index}
                className="fa fa-circle" 
                style={{ color: this.getLabelColor(label) }} 
            />
        })

        // render users
        const userElm = item.memberIDArr.map((member, index) => {
            return <img
                key={index}
                src={`./img/${member}.jpg`} 
                className="user" alt="user" 
            />
        })

        return (
            <tr>
                <td className="text-center">
                    {index + 1}
                </td>
                <td className="text-center">
                    {item.name}
                </td>
                <td className="text-center">
                    {labelElm}
                </td>
                <td className={`${this.getPriorityClass(item.priority)} font-weight-bold text-center`}>
                    {this.getPriority(item.priority)}
                </td>
                <td className="text-center">
                    {userElm}
                </td>
                <td className="text-center d-flex">
                    <button type="button" className="btn btn-outline-primary">Sửa</button>

                    <div className="form-group mx-2 my-0">
                      <select className="form-control" name="" id="">
                        <option value={-1}>Chọn tình trạng</option>
                        <option value={1}>Bắt đầu</option>
                        <option value={2}>Tạm ngưng</option>
                        <option value={3}>Hoàn thành</option>
                        <option value={4}>Hủy bỏ</option>
                      </select>
                    </div>                    
                </td>
                <td className="text-center">
                    <i className={`fa ${this.getProgressIcon(item.status)}  mr-2`} />
                </td>
            </tr>
        );
    }
}

export default TaskItem;