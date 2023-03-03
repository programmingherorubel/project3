import productReducer from "./reducer/productReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  product: productReducer,
});

export default rootReducer;
