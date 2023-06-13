import {
  DOWNLOAD_BOOK_PDF_REQUEST,
  DOWNLOAD_BOOK_PDF_SUCCESS,
  DOWNLOAD_BOOK_PDF_FAIL,
} from "../constants/downloadBookpdfConstants";
import axios from "axios";
import { BASE_URL } from "../../Components/BaseUrlContanst/Baseurlconstant";

export const downloadBookpdfAction =
  ({ razorpaySuccessId, bookpdf_id }) =>
  async (dispatch) => {
    try {
      dispatch({ type: DOWNLOAD_BOOK_PDF_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.get(
        `${BASE_URL}/api/v1/downloadbookpdf?razorpaySuccessId=${razorpaySuccessId}&bookpdf_id=${bookpdf_id}`,
        config
      );

      dispatch({
        type: DOWNLOAD_BOOK_PDF_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DOWNLOAD_BOOK_PDF_FAIL,
        payload: error.response.data.message,
      });
    }
  };
