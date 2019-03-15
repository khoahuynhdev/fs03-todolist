const initialState = {
  id: null,
  name: '',
  description: '',
  priority: '',
  memberIDArr: [],
  labelArr: [],
  status: 1
};

const taskEdit = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TASK_EDITING':
      //
      
      const task = action.task;
      return task;

    default:
      break;
  }
  return state
}

export default taskEdit;