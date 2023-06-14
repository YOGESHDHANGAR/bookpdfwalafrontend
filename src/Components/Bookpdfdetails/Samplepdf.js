import React from "react";
import "./Samplepdf.css";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Samplepdf = ({ sample_pdf_url }) => {
  const handleDownload = () => {
    window.open(sample_pdf_url, "_blank");
  };

  return (
    <Link className="sample_pdf_download" onClick={handleDownload}>
      <span className="download_arrow">
        <FaArrowDown />
      </span>
      <span className="download_text"> Download Sample PDF</span>
    </Link>
  );
};

export default Samplepdf;
