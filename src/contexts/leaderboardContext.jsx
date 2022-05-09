import { createContext, useContext, useState } from "react";

const leaderboardContext = createContext(null);

const useLeaderboard = () => useContext(leaderboardContext);

const LeaderboardProvider = ({ children }) => {
  const [leaderboard, setLeaderboard] = useState([
    {
      url: "https://www.twitter.com",
      avgScore: 91,
    },
    {
      url: "https://www.google.com",
      avgScore: 80.7,
    },
    {
      url: "https://neog-lms.vercel.app",
      avgScore: 96.3,
    },
  ]);

  return (
    <leaderboardContext.Provider value={{ leaderboard, setLeaderboard }}>
      {children}
    </leaderboardContext.Provider>
  );
};

export { useLeaderboard, LeaderboardProvider };
