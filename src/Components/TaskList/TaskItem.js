import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
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
		switch (parseInt(number, 10)) {
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
		switch (parseInt(number, 10)) {
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

	getProgressIcon = {
		1: "fa-hourglass-start",
		2: "fa-anchor",
		3: "fa-check-square-o",
		4: "fa-trash-o"
	}

	render() {
		// const index = this.props.index;
		// const item = this.props.item;

		// destructuring trong ES6
		const { index, item } = this.props;

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
					<button
						type="button"
						className="btn btn-outline-primary"
						onClick={() => {
							this.props.updateIsAddNewTask(false);
							this.props.editTask(item);
						}}
						data-toggle="modal"
						data-target="#modalTask"
					>Sửa</button>

					<div className="form-group mx-2 my-0">
						<select
							className="form-control"
							name=""
							id=""
							onChange={(e) => {
								this.props.editStatus(item.id, e.target.value);
							}}
							value={item.status}>
							<option value={-1}>Chọn tình trạng</option>
							<option value={1}>Bắt đầu</option>
							<option value={2}>Tạm ngưng</option>
							<option value={3}>Hoàn thành</option>
							<option value={4}>Hủy bỏ</option>
						</select>
					</div>
				</td>
				<td className="text-center">
					<i className={`fa ${this.getProgressIcon[item.status]}  mr-2`} />
				</td>
			</tr>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isAddNewTask: state.isAddNewTaskReducer
	};
}
const mapDispatchToProps = (dispatch) => {
	return {
		updateIsAddNewTask: (value) => {
			dispatch(actions.updateIsAddNewTask(value))
		},
		editTask: (task) => {
			dispatch(actions.getTaskEdit(task));
		},
		editStatus: (id, status) => {
			dispatch(actions.editStatus(id, status));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);