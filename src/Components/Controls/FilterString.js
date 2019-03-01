import React, { Component } from 'react';

class FilterString extends Component {
    render() {
        return (
            <div className="form-group text-left my-0">
                <input type="text" className="form-control" placeholder="Tìm kiếm công việc" />
            </div>
        );
    }
}

export default FilterString;