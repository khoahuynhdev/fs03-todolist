import React, { Component } from 'react';

class FilterPriority extends Component {
	render() {
		return (
			<div className="form-group text-left">
				<label htmlFor="sel1">Độ ưu tiên</label>
				<select className="form-control">
					<option className="font-weight-bold">Tất cả</option>
					<option className="text-info font-weight-bold">Thấp</option>
					<option className="text-success font-weight-bold">Trung bình</option>
					<option className="text-danger font-weight-bold">Cao</option>
				</select>
			</div>
		);
	}
}

export default FilterPriority;