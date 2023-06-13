import React, { useEffect } from "react";
import "./Paymentsuccess.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { downloadBookpdfAction } from "../../redux/actions/downloadBookpdfAction";
const Paymentsuccess = () => {
  const seachQuery = useSearchParams()[0];

  const dispatch = useDispatch();
  const { bookpdf_with_pdf_url, loading } = useSelector(
    (state) => state.bookpdf_with_pdf_url
  );

  const razorpay_payment_id = seachQuery.get("razorpay_payment_id");
  const bookpdf_id = seachQuery.get("bookpdf_id");

  useEffect(() => {
    dispatch(downloadBookpdfAction({ razorpay_payment_id, bookpdf_id }));
  }, [dispatch]);

  return (
    <div className="download_link_container">
      <a
        className="donwload_link"
        href={loading === false ? bookpdf_with_pdf_url.url : <>Wait</>}
      >
        Link To Download Pdf
      </a>
      <Link to={"/"} className="go_back_home_link">
        Go Back Home
      </Link>
    </div>
  );
};

export default Paymentsuccess;
