// redux thunk: function co the xu ly logic + return object

// redux binh thuong: function tra ve 1 object
export const addTask = (task) => {
	return {
		type: 'ADD_TASK',
		task,
		//payload: task
	}
}

export const updateIsAddNewTask = (value) => {
	return {
		type: "IS_ADD_NEW_TASK",
		value
	}
};

export const getTaskEdit = (task) => {
	return {
		type: "GET_TASK_EDITING",
		task,
		// payload: task
	}
}

export const editTask = (taskEditing) => {
	return {
		type: 'EDIT_TASK',
		taskEditing
	}
}

export const editStatus = (id, status) => {
	return {
		type: 'EDIT_STATUS',
		id,
		status
	};
}

export const getFilter = (value) => {
	return {
		type: 'FILTER_TASK',
		value
	};
}
export const getFilterLabel = (name, value) => {
	return {
		type: 'FILTER_LABEL',
		name,
		value
	};
}

export const getProfile = (profile) => {
	return {
		type: 'GET_PROFILE',
		profile
	}
};