import axios from "axios";
import { useState, createContext, useContext, useEffect } from "react";
import toast from "react-hot-toast";

const GAME_START_TIME = new Date("2025-06-17T07:34:00z");
const ROUND_DURATION = 120; 

const RoundContext = createContext();

export const RoundProvider = ({ children }) => {
    const [round, setRound] = useState(1);
    const [timeLeft, setTimeLeft] = useState(ROUND_DURATION);

    const calculateTimeLeft = () =>{
        const now = Date.now();
        const startTime = GAME_START_TIME.getTime();
        const secondsSinceStart = Math.floor((now - startTime)/1000);

        const currentRound = Math.floor(secondsSinceStart / ROUND_DURATION) + 1;
        const timeInCurrentRound = secondsSinceStart % ROUND_DURATION;
        const timeRemaining = ROUND_DURATION - timeInCurrentRound;

        setRound(currentRound);
        setTimeLeft(timeRemaining);
    }

    const getWinningColor = async() => {
        try {
         const res = await axios.get(`${import.meta.env.VITE_SERVER_API}/api/v1/game/winner/${round}`);
         console.log(res.data.winningColor);  
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {

       calculateTimeLeft(); 

       if(timeLeft === 0){
         getWinningColor();
       }
       const interval = setInterval(calculateTimeLeft, 1000);
       return () => clearInterval(interval); 
    }, []);


    return <RoundContext.Provider value={{round, timeLeft}} >{children}</RoundContext.Provider>
}

export const useRound = () => useContext(RoundContext);