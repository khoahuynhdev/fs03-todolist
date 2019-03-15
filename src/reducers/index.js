import { combineReducers } from 'redux';
import taskListReducer from './taskList';
import isAddNewTaskReducer from './isAddNewTask';
import taskEditReducer from './taskEdit';
const rootReducer = combineReducers({
	taskListReducer,
	isAddNewTaskReducer,
	taskEditReducer
});

export default rootReducer;