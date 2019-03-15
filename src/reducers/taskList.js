const initialState = localStorage && localStorage.tasks ? JSON.parse(localStorage.getItem('tasks')) : [];

// NOTE phai co state mac dinh
const taskListReducer = (state=initialState, action) => {
		// ...
		switch (action.type) {
			case 'ADD_TASK':
				// ...
				// B1: task = action.task
				// B2: lay data tu LS: state
				// B3: state.push(task)
				//state.push(action.task);
				const taskList = [...state, action.task];
				// B4: day len localStorage
				localStorage.setItem('tasks', JSON.stringify(taskList));
				// B5: return state
				return taskList;
			case 'EDIT_TASK':

				break;

			default:

				break;
		}
		// cuoi cung tra ve state
		return state;
};

export default taskListReducer;