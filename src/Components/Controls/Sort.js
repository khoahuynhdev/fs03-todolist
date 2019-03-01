import React, { Component } from 'react';

class Sort extends Component {
    render() {
        return (
            <div className="form-group text-left">
                <label>Sắp xếp theo công việc</label>
                <select className="form-control">
                    <option>Từ A đến Z</option>
                    <option>Từ Z đến A</option>
                </select>
            </div>
        );
    }
}

export default Sort;