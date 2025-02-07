import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Players from "./pages/Players";
import Managers from "./pages/Managers";
import Clubs from "./pages/Clubs";
import PlayerInfo from "./pages/PlayerInfo";
import ClubInfo from "./pages/ClubInfo";
import ManagerInfo from "./pages/ManagerInfo";
import { createContext, useState, useEffect } from "react";
export const playersContext = createContext();
function App() {
  const [playersData, setPlayersData] = useState([]);
  const [managersData, setManagersData] = useState([]);
  const [clubsData, setClubsData] = useState([]);

  const [info, setInfo] = useState(JSON.parse(localStorage.getItem("info")));
  const [search, setSearch] = useState("");
  // console.log(info);

  useEffect(() => {
    //fetch players
    const fetchPlayers = async () => {
      try {
        const response = await fetch(
          "https://football-be.onrender.com/players"
        );
        const data = await response.json();

        search.length
          ? setPlayersData(
              data.players.filter((player) =>
                player.name.toLowerCase().includes(search.toLowerCase())
              )
            )
          : setPlayersData(data.players);
      } catch (err) {
        console.log("error fetching players ", err);
      }
    };
    fetchPlayers();

    //fetch managers
    const fetchManagers = async () => {
      try {
        const response = await fetch(
          "https://football-be.onrender.com/managers"
        );
        const data = await response.json();
        // console.log(data.managers);
        search.length
          ? setManagersData(
              data.managers.filter((player) =>
                player.name.toLowerCase().includes(search.toLowerCase())
              )
            )
          : setManagersData(data.managers);
      } catch (err) {
        console.log(err);
      }
    };
    fetchManagers();

    //fetch clubs

    const fetchclubs = async () => {
      try {
        const response = await fetch("https://football-be.onrender.com/clubs");
        const data = await response.json();
        search.length
          ? setClubsData(
              data.clubs.filter((player) =>
                player.name.toLowerCase().includes(search.toLowerCase())
              )
            )
          : setClubsData(data.clubs);
        // console.log(data.clubs);
      } catch (err) {
        console.log(err);
      }
    };
    fetchclubs();
  }, [search]);
  console.log(search.length);

  return (
    <>
      <playersContext.Provider
        value={{
          playersData,
          setPlayersData,
          setInfo,
          managersData,
          setManagersData,
          clubsData,
          setClubsData,
        }}
      >
        <Header search={search} setSearch={setSearch} />

        <Routes>
          <Route path="/" element={<Players />} />
          <Route path="/managers" element={<Managers />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/playerinfo" element={<PlayerInfo info={info} />} />
          <Route path="/clubinfo" element={<ClubInfo info={info} />} />
          <Route path="/managerinfo" element={<ManagerInfo info={info} />} />
        </Routes>
      </playersContext.Provider>
    </>
  );
}

export default App;
