import React from "react";
import Header from "./components/utils/Header";
import Rewards from "./components/rewards/Rewards";
import GiftCard from "./components/gift-card/GiftCard";
import Menu from "./components/menu/Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/" element={<Rewards />} />
          <Route path="/gift" element={<GiftCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
