import { useRound } from "../../contexts/roundContext";

export const RoundTracker = () => {
    const {round } = useRound();
    return(
        <>
           <div className="flex flex-col items-center justify-center">
               <p className="text-xl md:text-3xl text-yellow-500">Round : {round}</p>
           </div>
        </>
    )
} 