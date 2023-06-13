import {
  GET_SINGLE_BOOK_PDF_FAIL,
  GET_SINGLE_BOOK_PDF_REQUEST,
  GET_SINGLE_BOOK_PDF_SUCCESS,
  CREATE_BOOK_PDF_REQUEST,
  CREATE_BOOK_PDF_SUCCESS,
  CREATE_BOOK_PDF_FAIL,
  CLEAR_ERRORS,
  GET_ALL_BOOK_PDF_REQUEST,
  GET_ALL_BOOK_PDF_SUCCESS,
  GET_ALL_BOOK_PDF_FAIL,
} from "../constants/bookpdfConstants";

export const createBookpdfReducer = (state = { createbookpdf: {} }, action) => {
  switch (action.type) {
    case CREATE_BOOK_PDF_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_BOOK_PDF_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        createbookpdf: action.payload.createbookpdf,
      };
    case CREATE_BOOK_PDF_FAIL:
      return {
        ...state,
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

export const getAllBookpdfReducer = (state = { getallbookpdf: [] }, action) => {
  switch (action.type) {
    case GET_ALL_BOOK_PDF_REQUEST:
      return {
        loading: true,
        getallbookpdf: [],
      };
    case GET_ALL_BOOK_PDF_SUCCESS:
      return {
        loading: false,
        getallbookpdf: action.payload.getallbookpdf,
      };

    case GET_ALL_BOOK_PDF_FAIL:
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

export const getSingleBookpdfReducer = (
  state = { getsinglebookpdf: [] },
  action
) => {
  switch (action.type) {
    case GET_SINGLE_BOOK_PDF_REQUEST:
      return {
        loading: true,
        getsinglebookpdf: [],
      };
    case GET_SINGLE_BOOK_PDF_SUCCESS:
      return {
        loading: false,
        getsinglebookpdf: action.payload.getsinglebookpdf,
      };

    case GET_SINGLE_BOOK_PDF_FAIL:
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
