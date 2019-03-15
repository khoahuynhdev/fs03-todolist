const initialState = true;

const isAddNewTask = (state = initialState, action) => {
  switch (action.type) {
    case "IS_ADD_NEW_TASK":
      const newIsAddNewTask = action.value;
      return newIsAddNewTask;
  
    default:
      break;
  }
  return state;
};

export default isAddNewTask;