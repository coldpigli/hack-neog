import { createContext, useContext, useState } from "react";

const leaderboardContext = createContext(null);

const useLeaderboard = () => useContext(leaderboardContext);

const LeaderboardProvider = ({children}) => {

    const [leaderboard, setLeaderboard] = useState([]);

    return <leaderboardContext.Provider value={{leaderboard, setLeaderboard}}>
        {children}
    </leaderboardContext.Provider>
}

export {
    useLeaderboard, LeaderboardProvider
}