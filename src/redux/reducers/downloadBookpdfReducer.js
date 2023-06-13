import {
  DOWNLOAD_BOOK_PDF_FAIL,
  DOWNLOAD_BOOK_PDF_REQUEST,
  DOWNLOAD_BOOK_PDF_SUCCESS,
} from "../constants/downloadBookpdfConstants";
import { CLEAR_ERRORS } from "../constants/bookpdfConstants";

export const downloadBookpdfReducer = (
  state = { bookpdf_with_pdf_url: {} },
  action
) => {
  switch (action.type) {
    case DOWNLOAD_BOOK_PDF_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DOWNLOAD_BOOK_PDF_SUCCESS:
      return {
        loading: false,
        bookpdf_with_pdf_url: action.payload,
      };

    case DOWNLOAD_BOOK_PDF_FAIL:
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
