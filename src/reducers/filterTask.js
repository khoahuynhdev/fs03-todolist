const initialStage = 0;

const filterReducer = (state = initialStage, action) => {
  switch (action.type) {
    case 'FILTER_TASK':
      return action.value;
  
    default:
      return state;
  }
}

export default filterReducer;