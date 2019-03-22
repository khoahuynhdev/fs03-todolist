import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import { Link } from 'react-router-dom';
class AddNewTask extends Component {
	render() {
		return (
			<Link to="/create-task"
				type="button"
				className="btn my-3 btn--newTask">
				Tạo task mới
			</Link>
		);
	}
}

const mapStateToProps = (state) => {
	return {

	};
}
const mapDispatchToProps = (dispatch) => {
	return {
		updateIsAddNewTask: (value) => {
			dispatch(actions.updateIsAddNewTask(value));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewTask);