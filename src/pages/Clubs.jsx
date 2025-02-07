import React, { useContext } from "react";
import { playersContext } from "../App";
import Card from "../components/Card";
import "./Clubs.css";
import { useNavigate } from "react-router-dom";

const Clubs = () => {
  const { clubsData, setInfo } = useContext(playersContext);
  const navigate = useNavigate();
  const handleInfo = (club) => {
    localStorage.setItem("info", JSON.stringify(club));
    setInfo(club);
    navigate("/clubInfo");
  };
  return (
    <div className="clubs">
      {clubsData.map((club) => (
        <div className="cards" key={club._id} onClick={() => handleInfo(club)}>
          <Card img={club.logo_url} title={club.name} />
        </div>
      ))}
    </div>
  );
};

export default Clubs;
