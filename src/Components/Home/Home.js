import React, { useEffect, useState } from "react";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookpdfAction } from "../../redux/actions/bookpdfAction";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, getallbookpdf } = useSelector(
    (state) => state.getallbookpdf
  );
  const [filteredBooks, setFilteredBooks] = useState(getallbookpdf);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    dispatch(getAllBookpdfAction());
  }, [dispatch]);

  useEffect(() => {
    if (searchKeyword) {
      const filtered = getallbookpdf.filter((book) => {
        const nameMatch = book.name
          .toLowerCase()
          .includes(searchKeyword.toLowerCase());
        const descriptionMatch = book.description
          .toLowerCase()
          .includes(searchKeyword.toLowerCase());
        return nameMatch || descriptionMatch;
      });
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks(getallbookpdf);
    }
  }, [searchKeyword, getallbookpdf]);

  const handleSearchChange = (keyword) => {
    setSearchKeyword(keyword);
  };

  return (
    <div>
      <Header onSearch={handleSearchChange} />
      <div className="cards_container">
        {loading === false &&
          filteredBooks.map((elem, index) => (
            <div
              key={index}
              className="card"
              onClick={() => {
                navigate(`/bookpdfdetails/${elem._id}`);
              }}
            >
              <img src={elem.image} alt="book_image" />
              <div className="content">
                <h2 className="name">{elem.name}</h2>
                <h2 className="price">Price: ₹{elem.price}</h2>
                <p className="decription">
                  {elem.description.slice(0, 80) + "..."}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
