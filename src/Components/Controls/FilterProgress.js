import React, { Component } from 'react';

class FilterProgress extends Component {
    render() {
        return (
            <div className="filter filter--progress">
                <ul className="list-unstyled text-left">Lọc
                    <li className="py-1 display-5 lead">
                        <i className="fa fa-hourglass-start mr-2" />Bắt đầu
                    </li>
                    <li className="py-1 display-5 lead">
                        <i className="fa fa-anchor" />Tạm ngưng</li>
                    <li className="py-1 display-5 lead">
                        <i className="fa fa-check-square-o mr-2" />Hoàn thành
                    </li>
                    <li className="py-1 display-5 lead">
                        <i className="fa fa-trash-o mr-2" />Hủy bỏ
                    </li>
                </ul>
            </div>
        );
    }
}

export default FilterProgress;