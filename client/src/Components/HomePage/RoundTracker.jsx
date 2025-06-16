import React, {useState} from "react";

export const RoundTracker = ({currentRound}) => {
    const [round, setRound] = useState("1");
    return(
        <>
           <div className="flex flex-col items-center justify-center">
               <p className="text-3xl text-yellow-500">Round : {round}</p>
           </div>
        </>
    )
} 