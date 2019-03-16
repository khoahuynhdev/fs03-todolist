import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
class FilterProgress extends Component {
	render() {
		return (
			<div className="filter filter--progress">
				<ul className="list-unstyled text-left">Lọc
            <li className="py-1 display-5 lead" onClick={this.props.filterTask.bind(this, 0)}>
						<i className="fa fa-star mr-2" />tất cả
            </li>
					<li className="py-1 display-5 lead" onClick={this.props.filterTask.bind(this, 1)}>
						<i className="fa fa-hourglass-start mr-2" />Bắt đầu
          </li>
					<li className="py-1 display-5 lead" onClick={this.props.filterTask.bind(this, 2)}>
						<i className="fa fa-anchor" />Tạm ngưng
					</li>
					<li className="py-1 display-5 lead" onClick={this.props.filterTask.bind(this, 3)}>
						<i className="fa fa-check-square-o mr-2" />Hoàn thành
          </li>
					<li className="py-1 display-5 lead" onClick={this.props.filterTask.bind(this, 4)}>
						<i className="fa fa-trash-o mr-2" />Hủy bỏ
          </li>
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {

	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		filterTask: (value) => {
			dispatch(actions.getFilter(value));
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterProgress);