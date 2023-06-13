import {
  NEW_CHECKOUT_FAIL,
  NEW_CHECKOUT_REQUEST,
  NEW_CHECKOUT_SUCCESS,
} from "../constants/paymentConstants";
import { CLEAR_ERRORS } from "../constants/bookpdfConstants";

export const checkoutReducer = (
  state = { razorpayInstanceOrders: {} },
  action
) => {
  switch (action.type) {
    case NEW_CHECKOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case NEW_CHECKOUT_SUCCESS:
      return {
        loading: false,
        razorpayInstanceOrders: action.payload,
      };

    case NEW_CHECKOUT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
