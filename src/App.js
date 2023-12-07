import "./App.css";
import AdsList from "./components/AdsList";
import ads from "./helpers/ads.json";
import { useEffect, useState } from "react";
import "./adStyle.css";
import CreateAd from "./components/CreateAd";
import generateRentalItem from "./helpers/adsRandomGenerator";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
import AdDetails from "./components/AdDetails";
import Home from "./components/Home";
import UserAds from "./components/UserAds";
import UpdateAd from "./components/UpdateAd";
import { Route, Routes, useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Login from "./components/Login";
import { set } from "mongoose";
import About from "./components/About";
import Register from "./components/register";

function App() {
  const rentalItems = Array.from({ length: 100 }, generateRentalItem);
  const [initialAds, setAds] = useState([]);
  //Call the DataBase and get some ads to initialize
  //set User token
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Load the initial Ads
  useEffect(() => {
    // call the function when mounted
    fetchdata();
  }, []);
  const navigate = useNavigate();

  const fetchdata = async () => {
    // Get all the the adds from the backend
    const serverURL = `http://localhost:5000/api/ads`;

    try {
      const data = await fetch(serverURL);
      const response = await data.json();
      console.log(response);
      setAds(response);
    } catch (error) {
      console.log(`error getting the server data`);
    }
  };
  function handleLogin(token, username) {
    console.log(token);
    // Set JWR token
    setToken(token);
    setUsername(username);
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setUsername("");
    setToken("");
    localStorage.clear();
    setIsLoggedIn(false);
    alert("You are now logged out");
  }

  return (
    <div className="bg-light">
      <h1 className="AppTitle">ShareAll</h1>
      <Navbar handleLogout={handleLogout} />
      {/* <SearchBar /> */}

      <Routes>
        <Route path="/createAd" element={<CreateAd />} />
        <Route path="/" element={<AdsList ads={initialAds} />} />
        <Route
          path="/login"
          element={<Login handleLogin={handleLogin} isLoggedIn={isLoggedIn} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/myAds" element={<UserAds fetchdata={fetchdata} />} />
        <Route path="register" element={<Register />} />
        <Route path="/updateAd/:adId" element={<UpdateAd />} />
      </Routes>

      <span>
        {/* <AdDetails adDetails={initialAds[0]} /> */}
        <Categories />
        {/* <UserAds /> */}
      </span>
    </div>
  );
}

export default App;
