import { combineReducers } from 'redux';
import taskListReducer from './taskList';
const rootReducer = combineReducers({
	taskListReducer
});

export default rootReducer;