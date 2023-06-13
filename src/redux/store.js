import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { userReducer } from "./reducers/userReducer";

import { checkoutReducer } from "./reducers/paymentReducer";
import {
  createBookpdfReducer,
  getAllBookpdfReducer,
  getSingleBookpdfReducer,
} from "./reducers/bookpdfReducer";
import { downloadBookpdfReducer } from "./reducers/downloadBookpdfReducer";

const reducer = combineReducers({
  createpdfbook: createBookpdfReducer,
  getallbookpdf: getAllBookpdfReducer,
  getsinglebookpdf: getSingleBookpdfReducer,
  user: userReducer,
  razorpayInstanceOrders: checkoutReducer,
  bookpdf_with_pdf_url: downloadBookpdfReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
