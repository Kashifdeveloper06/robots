import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import thunk from "redux-thunk";
import robotDetailReducer from "./redux/reducers/robotDetailReducer";
import addToCardReducer from "./redux/reducers/addToCardReducer";
const rootReducer = combineReducers({
  robotDetailReducer,
  toastr: toastrReducer,
  addToCardReducer,
});
const composeEnhancers = composeWithDevTools({
  serialize: true,
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
