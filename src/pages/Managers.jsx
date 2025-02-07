import React, { useContext } from "react";
import Card from "../components/Card";
import { playersContext } from "../App";
import "./Managers.css";
import { useNavigate } from "react-router-dom";

const Managers = () => {
  const { managersData, setInfo } = useContext(playersContext);
  const navigate = useNavigate();
  const handleInfo = (manager) => {
    localStorage.setItem("info", JSON.stringify(manager));
    setInfo(JSON.parse(localStorage.getItem("info")));
    navigate("/ManagerInfo");
  };
  return (
    <div className="managers">
      {managersData.map((manager) => (
        <div
          className="cards"
          key={manager._id}
          onClick={() => handleInfo(manager)}
        >
          <Card img={manager.image} title={manager.name} />
        </div>
      ))}
    </div>
  );
};

export default Managers;
