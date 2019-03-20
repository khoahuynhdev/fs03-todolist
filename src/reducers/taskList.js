const initialState = localStorage && localStorage.tasks ? JSON.parse(localStorage.getItem('tasks')) : [];

// NOTE phai co state mac dinh
const taskListReducer = (state = initialState, action) => {
	// ...
	let index = -1;
	let tasks = [];
	switch (action.type) {
		case 'ADD_TASK':
			action.task.id = new Date().getTime();
			const taskList = [...state, action.task];
			localStorage.setItem('tasks', JSON.stringify(taskList));
			return taskList;

		case 'EDIT_TASK':
			index = state.findIndex(elm => {
				return elm.id === action.taskEditing.id
			});
			tasks = [...state];
			tasks[index] = action.taskEditing;
			localStorage.setItem('tasks', JSON.stringify(tasks));
			return tasks;

		case 'EDIT_STATUS':
			index = state.findIndex(elm => elm.id === action.id);
			tasks = state.map(elm => Object.assign({}, elm));
			tasks[index].status = parseInt(action.status);
			localStorage.setItem('tasks', JSON.stringify(tasks));
			return tasks;

		default:
			return state;
	}
};

export default taskListReducer;