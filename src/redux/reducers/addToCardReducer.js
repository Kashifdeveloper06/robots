import { ADD_TO_CARD } from "../actions/constants";
const initailStae = {
  cardArray: []
};
function addToCardReducer(state = initailStae, action) {
  switch (action.type) {
    case ADD_TO_CARD: {
      return {
        ...state,
        cardArray: [...state.cardArray,action.response]
      };
    }
    default:
      return state;
  }
}
export default addToCardReducer;
