import { useState, createContext, useContext } from "react";

const RoundContext = createContext();

export const RoundProvider = ({ children }) => {
    const [round, setRound] = useState(1);
    return <RoundContext.Provider value={{round, setRound}} >{children}</RoundContext.Provider>
}

export const useRound = () => useContext(RoundContext);