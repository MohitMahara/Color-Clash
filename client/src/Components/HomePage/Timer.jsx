import { useRound } from "../../contexts/roundContext";

export const Timer = () => {
    const {timeLeft} = useRound();

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