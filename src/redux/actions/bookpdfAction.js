import axios from "axios";
import {
  GET_SINGLE_BOOK_PDF_FAIL,
  GET_SINGLE_BOOK_PDF_REQUEST,
  GET_SINGLE_BOOK_PDF_SUCCESS,
  CREATE_BOOK_PDF_REQUEST,
  CREATE_BOOK_PDF_SUCCESS,
  CREATE_BOOK_PDF_FAIL,
  GET_ALL_BOOK_PDF_REQUEST,
  GET_ALL_BOOK_PDF_SUCCESS,
  GET_ALL_BOOK_PDF_FAIL,
  CLEAR_ERRORS,
} from "../constants/bookpdfConstants";
import { BASE_URL } from "../../Components/BaseUrlContanst/Baseurlconstant";

// Create Bookpdf
export const createBookpdfAction = (bookpdfData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_BOOK_PDF_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `${BASE_URL}/api/v1/createbookpdf`,
      bookpdfData,
      config
    );

    dispatch({
      type: CREATE_BOOK_PDF_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_BOOK_PDF_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Get All Bookpdf
export const getAllBookpdfAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_BOOK_PDF_REQUEST });

    let link = `${BASE_URL}/api/v1/getallbookpdf`;

    const { data } = await axios.get(link);

    dispatch({
      type: GET_ALL_BOOK_PDF_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_BOOK_PDF_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Get Single Bookpdf
export const getSingleBookpdfAction = (bookpdf_id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_BOOK_PDF_REQUEST });

    let link = `${BASE_URL}/api/v1/getsinglebookpdf/${bookpdf_id}`;

    const { data } = await axios.get(link);

    dispatch({
      type: GET_SINGLE_BOOK_PDF_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_BOOK_PDF_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
