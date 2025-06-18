import axios from "axios";
import { useState, createContext, useContext, useEffect } from "react";
import { useRef } from 'react';
import toast from "react-hot-toast";

const GAME_START_TIME = new Date("2025-06-18T17:18:00z");
const ROUND_DURATION = 120; 

const RoundContext = createContext();

export const RoundProvider = ({ children }) => {
    const prevRound = useRef(null);

    const [round, setRound] = useState(1);
    const [betCount, setBetCount] = useState(0);
    const [timeLeft, setTimeLeft] = useState(ROUND_DURATION);

    const calculateTimeLeft = () =>{
        const now = Date.now();
        const startTime = GAME_START_TIME.getTime();
        const secondsSinceStart = Math.floor((now - startTime)/1000);

        const currentRound = Math.floor(secondsSinceStart / ROUND_DURATION) + 1;
        const timeInCurrentRound = secondsSinceStart % ROUND_DURATION;
        const timeRemaining = ROUND_DURATION - timeInCurrentRound;

        if (prevRound.current && currentRound !== prevRound.current){
            setBetCount(0);
            getWinningColor(currentRound -1);
        }

        prevRound.current = currentRound;
        setRound(currentRound);
        setTimeLeft(timeRemaining);
    }

    const getWinningColor = async(Round) => {
         const res = await axios.get(`${import.meta.env.VITE_SERVER_API}/api/v1/game/winner/${Round}`);
         toast.success("Winner Card : " + res.data.winningColor);  
    }

    useEffect(() => {
       calculateTimeLeft(); 
       const interval = setInterval(calculateTimeLeft, 1000);
       return () => clearInterval(interval); 
    }, []);


    return <RoundContext.Provider value={{round, timeLeft, betCount, setBetCount}} >{children}</RoundContext.Provider>
}

export const useRound = () => useContext(RoundContext);