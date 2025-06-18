import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { RoundTracker } from "../Components/HomePage/RoundTracker";
import { Timer } from "../Components/HomePage/Timer";
import Layout from "../Components/Layout/Layout";
import { useRound } from "../contexts/roundContext";
import { UseAuth } from "../contexts/authContext";
import toast from "react-hot-toast";
import axios from "axios";

export default function HomePage() {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(0);
  const {round, betCount, setBetCount} = useRound();
  const {userInfo} = UseAuth();

  const getTotalBets = async() => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_API}/api/v1/game/getBets/${round}`);
      if(res.data.success){
         setBetCount(res.data.bets.totalBets.length);
      }
      } catch (error) {
      toast.error(error.message);
    }
  }

  const handleSubmit = async () => {
    try {

    if(userInfo?.user == null || userInfo?.token == null) {
      toast.error("Please login to start the game");
      return;
     }

    if(selectedAmount === 0 || selectedColor === ""){
        toast.error("To start the game please select a color and amount");
        return;
    }
     
    const userId = userInfo?.user?._id;

    const res = await axios.post(`${import.meta.env.VITE_SERVER_API}/api/v1/game/bet`,{
       selectedAmount, selectedColor, round, userId
    });

    if(res.data.success){
      getTotalBets();
      toast.success("You have been registered in round " + round + " with color " + selectedColor + " and amount " + selectedAmount);
    }


    } catch (error) {
      toast.error(error.message);
    }

  }

  return (
    <Layout>
      <div className="bg-gray-800 w-full p-6 min-h-screen">
        <div className="flex justify-between w-full items-center gap-2">
          <Timer/>
          <RoundTracker/>
          <div className="flex items-center justify-center gap-2">
            <FaRegUser className="text-green-500"/>
            <p className="text-sm md:text-xl text-green-500 font-seminbold">{betCount}</p>
          </div>
        </div>
       
       <div className="flex items-center justify-between mt-10 md:w-3xl mx-auto max-w-full  h-[200px] md:h-[300px]">
           <div className={`flex justify-center items-center bg-red-500 h-full w-[30%] rounded-lg text-gray-100 hover:border-3 hover:border-gray-100 ${selectedColor == "red" ? "border-3 border-gray-100" : ""} cursor-pointer transition duration-300`} onClick={() => setSelectedColor("red")}>
                <h1 className="text-lg font-semibold">Red</h1>
           </div>

           <div className={`flex justify-center items-center bg-blue-500 h-full w-[30%] rounded-lg text-gray-100 hover:border-3 hover:border-gray-100 ${selectedColor == "blue" ? "border-3 border-gray-100" : ""} cursor-pointer transition duration-300`} onClick={() => setSelectedColor("blue")}>
               <h1 className="text-lg font-semibold">Blue</h1>
           </div>

          <div className={`flex justify-center items-center bg-green-500 h-full w-[30%] rounded-lg text-gray-100 hover:border-3 hover:border-gray-100 ${selectedColor == "green" ? "border-3 border-gray-100" : ""} cursor-pointer transition duration-300`} onClick={() => setSelectedColor("green")}>
               <h1 className="text-lg font-semibold">Green</h1>
          </div>
       </div>

       <div className="flex items-center justify-center gap-4 mt-10 bg-gray-700 md:w-2xl mx-auto max-w-full rounded-lg px-2">

            <div className={`flex bg-gray-50 my-2 text-gray-900 p-2 justify-center items-center rounded-lg shadow-md cursor-pointer w-[40px] h-[40px] hover:border-3 hover:border-green-600 ${selectedAmount == 0.1 ? "border-3 border-green-600" : ""} transition duration-200`} onClick={() => setSelectedAmount(0.1)}>
                <h2 className="text-lg font-bold">0.1</h2>
            </div>

            <div className={`flex bg-gray-50 my-2 text-gray-900 p-2 justify-center items-center rounded-lg shadow-md cursor-pointer w-[40px] h-[40px] hover:border-3 hover:border-green-600 ${selectedAmount == 0.2 ? "border-3 border-green-600" : ""} transition duration-200`} onClick={() => setSelectedAmount(0.2)}>
                <h2 className="text-lg font-bold">0.2</h2>
            </div>

            <div className={`flex bg-gray-50 my-2 text-gray-900 p-2 justify-center items-center rounded-lg shadow-md cursor-pointer w-[40px] h-[40px] hover:border-3 hover:border-green-600 ${selectedAmount == 0.5 ? "border-3 border-green-600" : ""} transition duration-200`} onClick={() => setSelectedAmount(0.5)}>
                <h2 className="text-lg font-bold">0.5</h2>
            </div>

            <div className={`flex bg-gray-50 my-2 text-gray-900 p-2 justify-center items-center rounded-lg shadow-md cursor-pointer w-[40px] h-[40px] hover:border-3 hover:border-green-600 ${selectedAmount == 1 ? "border-3 border-green-600" : ""} transition duration-200`} onClick={() => setSelectedAmount(1)}>
                <h2 className="text-lg font-bold">1</h2>
            </div>

            <div className={`flex bg-gray-50 my-2 text-gray-900 p-2 justify-center items-center rounded-lg shadow-md cursor-pointer w-[40px] h-[40px] hover:border-3 hover:border-green-600 ${selectedAmount == 2 ? "border-3 border-green-600" : ""} transition duration-200`} onClick={() => setSelectedAmount(2)}>
                <h2 className="text-lg font-bold">2</h2>
            </div>

            <div className={`flex bg-gray-50 my-2 text-gray-900 p-2 justify-center items-center rounded-lg shadow-md cursor-pointer w-[40px] h-[40px] hover:border-3 hover:border-green-600 ${selectedAmount == 5 ? "border-3 border-green-600" : ""} transition duration-200`} onClick={() => setSelectedAmount(5)}>
                <h2 className="text-lg font-bold">5</h2>
            </div>
       </div>

       <div className="flex items-center justify-center mt-10">
         <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200" onClick={handleSubmit}>
           Start Game
         </button>
        </div> 

       </div>
    </Layout>
  );
}
