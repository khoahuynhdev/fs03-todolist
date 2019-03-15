// redux thunk: function co the xu ly logic + return object

// redux binh thuong: function tra ve 1 object
export const addTask = (task) => {
	return {
		type: 'ADD_TASK',
		task,
		//payload: task
	}
}