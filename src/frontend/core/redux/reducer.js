import { combineReducers } from "redux";

import { rootReducer } from "frontend/redux";

export default combineReducers({
  basic: rootReducer,
});
