//const initialStage = 0;
const newInitialStage = {
  progress: 0,
  label: {
    Frontend: false,
    Backend: false,
    API: false,
    Issue: false
  }
}
// TODO use an object to change state
// for taskProcess 0 1 2 3 4
// for taskLabel 0 1 2 3 4
const filterReducer = (state = newInitialStage, action) => {
  let newStage;
  switch (action.type) {
    case 'FILTER_TASK':
      newStage = Object.assign({}, state);
      newStage.progress = action.value
      return newStage;
    case 'FILTER_LABEL':
      newStage = Object.assign({}, state);
      newStage.label = Object.assign({}, state.label);
      newStage.label[action.name] = action.value;
      return newStage;

    default:
      return state;
  }
}

export default filterReducer;