import React from "react";

const Api = () => {
  //fetch players
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch("http://localhost:8000/players");
        const data = await response.json();

        setPlayersData(data.players);
      } catch (err) {
        console.log("error fetching players ", err);
      }
    };
    fetchPlayers();
  }, []);

  return <div>Api</div>;
};

export default Api;
