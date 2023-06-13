import "./App.css";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Bookpdfdetails from "./Components/Bookpdfdetails/Bookpdfdetails";
import Paymentsuccess from "./Components/Paymentsuccess/Paymentsuccess";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/paymentsuccess" element={<Paymentsuccess />} />
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/bookpdfdetails/:bookpdf_id"
          element={<Bookpdfdetails />}
        />
      </Routes>
    </>
  );
}

export default App;
