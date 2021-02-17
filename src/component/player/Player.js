import React from "react";
import "./player.css";
import Sidebar from "./sidebar/Sidebar";
import Body from "./body/Body";
import Footer from "./footer/Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body d-flex">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
