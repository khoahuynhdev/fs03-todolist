import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
class AddNewTask extends Component {
	render() {
		return (
			<button
				type="button"
				className="btn my-3 btn--newTask"
				data-toggle="modal"
				data-target="#modalTask"
				// onClick={this.props.convertEditToAdd}
				onClick={this.props.updateIsAddNewTask.bind(this, true)}
			>
				<i className="fa fa-pencil-square-o" />
				Tạo Task mới
            </button>
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