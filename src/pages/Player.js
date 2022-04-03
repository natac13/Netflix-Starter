import React from "react";
import "./Player.css";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "web3uikit";

const Player = () => {
  const location = useLocation();
  const currentlyPlaying = location?.state;

  return (
    <div className="playerPage">
      <video autoPlay controls className="videoPlayer">
        <source src={currentlyPlaying} type="video/mp4" />
      </video>
      <div className="backHome">
        <Link to="/">
          <Icon
            className="backButton"
            fill="rgba(255,255,255,0.25)"
            size={60}
            svg="arrowCircleLeft"
          />
        </Link>
      </div>
    </div>
  );
};

export default Player;
