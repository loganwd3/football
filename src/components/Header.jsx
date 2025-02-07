import React from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";
import Search from "./Search";

const Header = ({ search, setSearch }) => {
  const location = useLocation();
  const pages = ["/", "/clubs", "/managers"];
  return (
    <div className="menu">
      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to={"/"}>Players</Link>
        </li>
        <li>
          <Link to={"/managers"}>Managers</Link>
        </li>
        <li>
          <Link to={"/clubs"}>Clubs</Link>
        </li>
      </ul>{" "}
      {pages.includes(location.pathname) && (
        <Search search={search} setSearch={setSearch} />
      )}
    </div>
  );
};

export default Header;
