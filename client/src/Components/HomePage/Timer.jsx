import React, {useState, useEffect} from "react";
import { useRound } from "./RoundContext";

export const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(120);
    const {round, setRound} = useRound();

    useEffect(() =>{
      if(timeLeft === 0){
         setTimeLeft(120);
         setRound(prevRound => prevRound + 1);
         return;
      }

      const timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime -1);
      }, 1000);

      return () => clearInterval(timer);

    }, [timeLeft])


    const formatTime = (time) =>{
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        if(seconds <10){
            return `0${minutes} : 0${seconds}`;
        }
        return `0${minutes} : ${seconds}`;
    }

    return(
       <>
          <div className="flex flex-row items-center justify-center p-2 bg-black rounded-lg">
              <p className="text-red-500 text-2xl font-semibold">{formatTime(timeLeft)}</p>
          </div>
       </>
    );
}