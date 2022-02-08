import { ALL_ROBOTS } from "../actions/constants";
const initailStae = {
  robotArray: [],
};
function robotDetailReducer(state = initailStae, action) {
  switch (action.type) {
    case ALL_ROBOTS: {
      return {
        ...state,
        robotArray: action.response,
      };
    }
    default:
      return state;
  }
}

export default robotDetailReducer;
