import React, { useEffect, useState } from "react";
import "./Bookpdfdetails.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleBookpdfAction } from "../../redux/actions/bookpdfAction";
import qr_image from "./qr_image.jpg";
import { register } from "../../redux/actions/userAction";

const UserInputForm = () => {
  const dispatch = useDispatch();
  const { bookpdf_id } = useParams();

  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [upiId, setUpiId] = useState("");

  const { user, loading } = useSelector((state) => state.user);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleUpiIdChange = (event) => {
    setUpiId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const myForm = new FormData();

    if (!email && !mobileNumber) {
      alert("Please enter either email or mobile number.");
      return;
    }

    myForm.set("upiId", upiId);
    myForm.set("email", email);
    myForm.set("mobileNumber", mobileNumber);
    myForm.set("bookpdf_id", bookpdf_id);

    dispatch(register(myForm));
  };

  useEffect(() => {
    if (loading === false && user && user.createdAt) {
      alert(
        "Successfull, now wait for 10 minutes, you will get an email with link of pdf, if your payment is valid!"
      );
      window.location.reload();
    }
  }, [user]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
      />
      <span className="or">or</span>
      <input
        type="tel"
        placeholder="Enter your mobile number"
        value={mobileNumber}
        onChange={handleMobileNumberChange}
      />
      <input
        type="text"
        placeholder="Enter Upi Id"
        value={upiId}
        onChange={handleUpiIdChange}
        required
        title="This will you get from your upi payment gateway"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

const Bookpdfdetails = () => {
  const dispatch = useDispatch();
  const { bookpdf_id } = useParams();

  const { getsinglebookpdf, loading } = useSelector(
    (state) => state.getsinglebookpdf
  );

  useEffect(() => {
    dispatch(getSingleBookpdfAction(bookpdf_id));
  }, [dispatch, bookpdf_id]);

  return (
    <div className="productdetails_and_payment_container">
      <div className="productdetails_card_container">
        {loading === false && (
          <div className="productdetails_card">
            <img src={getsinglebookpdf.image} alt={getsinglebookpdf.name} />
            <h2 className="productdetails_name">{getsinglebookpdf.name}</h2>
            <h2 className="productdetails_price">
              Price: ₹{getsinglebookpdf.price}
            </h2>
            <p className="productdetails_description">
              {getsinglebookpdf.description.slice(0, 80) + "..."}
            </p>
          </div>
        )}
      </div>
      <div className="payment_container">
        <div className="qr_and_form">
          <img className="qr_image" src={qr_image} alt="QR Code" />
          <UserInputForm bookpdf_id={bookpdf_id} />
        </div>
        <h3 className="note">
          After 10 minutes of your payment, you will receive an email link where
          you can download the book PDF. Don't forget to enter your email and
          upi_id.
        </h3>
        <p>You can pay from any payment gateway!</p>
      </div>
    </div>
  );
};

export default Bookpdfdetails;
