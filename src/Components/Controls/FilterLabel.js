import React, { Component } from 'react';

class FilterLabel extends Component {
    render() {
        return (
            <div className="filter filter--label">
                <ul className="list-unstyled text-left">Nhãn
                    <li className="py-1 display-5 lead">
                        <i className="fa fa-circle mr-2" />Frontend
                    </li>
                    <li className="py-1 display-5 lead">
                        <i className="fa fa-circle mr-2" />Backend
                    </li>
                    <li className="py-1 display-5 lead">
                        <i className="fa fa-circle mr-2" />API
                    </li>
                    <li className="py-1 display-5 lead">
                        <i className="fa fa-circle mr-2" />Issue
                    </li>
                </ul>
            </div>
        );
    }
}

export default FilterLabel;