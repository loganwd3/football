import React from "react";
import "./Info.css";
const ClubInfo = ({ info }) => {
  return (
    <div className="clubsInfo">
      <div className="img">
        <img src={info.logo_url} alt="img" />
      </div>
      <div className="details">
        <p>Name - {info.name}</p>
        <p>Champion League : {info.champions_league_titles}</p>
        <p>League Title - {info.league_titles}</p>
        <p>Domestic Title - {info.domestic_titles}</p>
      </div>
    </div>
  );
};

export default ClubInfo;
