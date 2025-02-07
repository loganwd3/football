import React, { useContext } from "react";
import "./Info.css";
import ronaldo from "../assets/ronaldo.png";
import { useSelector } from "react-redux";
import { playersContext } from "../App";
const PlayerInfo = ({ info }) => {
  // console.log(data);
  // const { info } = useContext(playersContext);
  return (
    <div className="playersInfo">
      <div className="img">
        <img src={info.image} alt="img" />
      </div>
      <div className="details">
        <p>Name - {info.name}</p>
        <p>Nationality - {info.nationality}</p>
        <p>Number - {info.jersey_no}</p>
        <p>Goals - {info.goals}</p>
        <p>Assists - {info.assists}</p>
        <p>Ballon Dor - {info.ballon_dor}</p>
        <p>golden Boot - {info.golden_boot}</p>
        <p>World Cup - {info.worldcup}</p>
        <p>League Title - {info.league_title}</p>
      </div>
    </div>
  );
};

export default PlayerInfo;
