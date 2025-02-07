import React, { useContext } from "react";
import "./Info.css";

const ManagerInfo = ({ info }) => {
  // console.log(data);
  // const { info } = useContext(playersContext);
  return (
    <div className="managersInfo">
      <div className="img">
        <img src={info.image} alt="img" />
      </div>
      <div className="details">
        <p>Name - {info.name}</p>
        <p>Champion league : {info.champions_league}</p>
        <p>League Title - {info.league_title}</p>
        <p>Domestic Title - {info.domestic_title}</p>
        <p>WorldCup - {info.world_cup}</p>
      </div>
    </div>
  );
};

export default ManagerInfo;
