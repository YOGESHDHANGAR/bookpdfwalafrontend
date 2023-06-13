import {
  NEW_CHECKOUT_FAIL,
  NEW_CHECKOUT_REQUEST,
  NEW_CHECKOUT_SUCCESS,
} from "../constants/paymentConstants";
import axios from "axios";
import { BASE_URL } from "../../Components/BaseUrlContanst/Baseurlconstant";

// Create Product
export const checkoutPayment = (myForm) => async (dispatch) => {
  try {
    dispatch({ type: NEW_CHECKOUT_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${BASE_URL}/api/v1/checkout`,
      myForm,
      config
    );

    dispatch({
      type: NEW_CHECKOUT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_CHECKOUT_FAIL,
      payload: error.response.data.message,
    });
  }
};
