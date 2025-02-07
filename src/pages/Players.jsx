import React, { useContext, useEffect } from "react";
import Search from "../components/Search";
import "./Players.css";
import { playersContext } from "../App";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const Players = () => {
  const navigate = useNavigate();
  const { playersData, setPlayersData, info, setInfo } =
    useContext(playersContext);

  // console.log(playersData);
  if (!playersData || !Array.isArray(playersData)) {
    return <div>Loading...</div>; // Handle undefined or non-array cases
  }

  const handleInfo = (player) => {
    setInfo(player);
    localStorage.setItem("info", JSON.stringify(player));
    navigate("/PlayerInfo");
  };

  return (
    <div className="players">
      {playersData.map((player) => (
        <div
          className="cards"
          key={player._id}
          onClick={() => handleInfo(player)}
        >
          <Card img={player.image} title={player.name} />
        </div>
      ))}
    </div>
  );
};

export default Players;
