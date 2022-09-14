// ** Redux Imports
import { combineReducers } from "redux";

// ** Reducers Imports
import auth from "../reducers/index";
import product from "../../pages/app/products/store/reducer/index";

const rootReducer = combineReducers({
  auth,
  product,
});

export default rootReducer;
