import { combineReducers } from 'redux';
import taskListReducer from './taskList';
import isAddNewTaskReducer from './isAddNewTask';
import taskEditReducer from './taskEdit';
import filterReducer from './filterTask';
const rootReducer = combineReducers({
	taskListReducer,
	isAddNewTaskReducer,
	taskEditReducer,
	filterReducer
});

export default rootReducer;

// NOTE Thing you should never do inside a reducer
// Mutate its arguments
// Perform side effects like API calls and routing transitions
// Call non-pure function, e.g Date.now() or Math.random()

// Given the same arguments, it should calculate the next state and return it. 
// No surprises. No side effects. No API calls. No mutations. Just a calculation.