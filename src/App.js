import "./App.css";
import AdsList from "./components/AdsList";
import ads from "./helpers/ads.json";
import { useState } from "react";
import "./adStyle.css";
import CreateAd from "./components/CreateAd";
import generateRentalItem from "./helpers/adsRandomGenerator";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  const rentalItems = Array.from({ length: 100 }, generateRentalItem);
  const [initialAds, setAds] = useState(rentalItems);
  //HEre call the DataBase and get some ads to initialize

  return (
    <div className="App">
      <h1 className="AppTitle">ShareAll</h1>
      <Navbar />
      <SearchBar />
      <span>
        <AdsList ads={initialAds} />
        <CreateAd />
      </span>
    </div>
  );
}

export default App;
