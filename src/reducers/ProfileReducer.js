const initialState = {};

const profile = (state = initialState, action) => {

  switch (action.type) {
    case 'GET_PROFILE':
      
      return action.profile;
  
    default:
      return state;
  }
}

export default profile;