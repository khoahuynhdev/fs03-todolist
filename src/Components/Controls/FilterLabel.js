import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
class FilterLabel extends Component {

	render() {
		return (
			<div className="filter filter--label">
				<ul className="list-unstyled text-left">Nhãn
						<li
						className="py-1 display-5 lead"
						onClick={() => {							
							this.props.getLabelState('Frontend', !this.props.labelState['Frontend']);
						}}>
						<i className="fa fa-circle mr-2" />Frontend
            </li>
					<li
						className="py-1 display-5 lead"
						onClick={() => {
							this.props.getLabelState('Backend', !this.props.labelState['Backend']);
						}}>
						<i className="fa fa-circle mr-2" />Backend
          </li>
					<li className="py-1 display-5 lead"
						onClick={() => {
							this.props.getLabelState('API', !this.props.labelState['API']);
						}}>
						<i className="fa fa-circle mr-2" />API
          </li>
					<li className="py-1 display-5 lead"
						onClick={() => {
							this.props.getLabelState('Issue', !this.props.labelState['Issue']);
						}}>
						<i className="fa fa-circle mr-2" />Issue
          </li>
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		labelState: state.filterReducer.label
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		getLabelState: (name,value) => {
			dispatch(actions.getFilterLabel(name, value));
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterLabel);