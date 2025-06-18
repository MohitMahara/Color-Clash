import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { UseAuth } from "../contexts/authContext";
import { BsCoin } from "react-icons/bs";

export const HistoryPage = () => {
    const [gameHistory, setGameHistory] = useState([]);
    const [myHistory, setMyHistory] = useState([]);
    const [selectedTab, setSelectedTab] = useState("gameHistory");
    const [totalBalance, setTotalBalance] = useState(0);
    const {userInfo} = UseAuth();
    const userId = userInfo?.user?._id;

    const fetchGameHistory = async () => {
        try {
         const res = await axios.get(`${import.meta.env.VITE_SERVER_API}/api/v1/game/history`);

         if(res.data.success){
            const his = res.data.gameHistory.sort((a, b) => b.round - a.round);
            setGameHistory(his);
         }
            
        } catch (error) {
            toast.error(error.message);
        }
    }


    const fetchMyHistory = async () => {
        try {

         if(!userId) return;

         const res = await axios.get(`${import.meta.env.VITE_SERVER_API}/api/v1/game/history/${userId}`);

         if(res.data.success){
            const his = res.data.myHistory.sort((a, b) => b.round - a.round);
            setMyHistory(his);
            setTotalBalance(res.data.balance);
         }
            
        } catch (error) {
            toast.error(error.message);
        }
    }


    useEffect(() => {
      fetchMyHistory();
    }, [userId])

    useEffect(() => {
      fetchGameHistory();
    },[])

  return (
    <Layout>
      <div className="bg-gray-800 w-full p-6 min-h-screen mx-auto">
        <div className="flex flex-row justify-between items-center">
           <h1 className="text-2xl md:text-3xl text-gray-100 font-semibold">History</h1>
           <div className="flex gap-2 justify-center items-center">
               <BsCoin className="text-yellow-400"/>  
               <p className="text-white"> {totalBalance}</p>
           </div>
        </div>
        <div className="w-full flex flex-col md:flex-row mt-6 h-[80vh] gap-4">
            <div className="flex flex-row gap-4 w-full h-[100px]  md:flex-col md:w-[15%] md:h-full bg-gray-700 p-4 shdaow-lg rounded-lg">
               <button className={` py-2 px-4 rounded-lg w-1/2 md:w-full transition duration-300 ${selectedTab == "gameHistory" ? "bg-blue-600 text-white " : "bg-gray-100 text-black"} `} onClick={() => setSelectedTab("gameHistory")}>Game History</button>
               <button className={` py-2 px-4 rounded-lg w-1/2 md:w-full transition duration-300 ${selectedTab == "myHistory"   ? "bg-blue-600 text-white"  : "bg-gray-100 text-black"} `} onClick={() => setSelectedTab("myHistory")}>My History</button>
            </div>
            <div className="flex w-full md:w-[85%] h-full bg-gray-700 rounded-lg mb-4">

                { selectedTab === "gameHistory"  && gameHistory?.length > 0 && 
                    <div className="w-full h-full p-4 overflow-y-auto"> 
                            <ul className="space-y-2">
                                {gameHistory?.map((game, index) => (
                                    <li key={index} className="bg-gray-800 p-3 rounded-lg shadow-md">
                                        <p className="text-gray-200">Round: {game.round}</p>
                                        <p className="text-gray-400">Winning Color: {game.winningColor}</p>
                                        <p className="text-gray-400">{new Date(game.createdAt).toLocaleString()}</p>
                                    </li>
                                ))}
                            </ul>
                    </div>
                }
            
                { selectedTab === "myHistory"  && myHistory?.length > 0 &&
                    <div className="w-full h-full p-4 overflow-y-auto"> 
                            <ul className="space-y-2">
                                {myHistory?.map((game, index) => (
                                    <li key={index} className="w-full bg-gray-800 p-3 rounded-lg shadow-md flex flex-row justify-between items-center">
                                        <div className="w-[90%]">
                                            <p className="text-gray-200">Round: {game.round}</p>
                                            <p className="text-gray-400">Color: {game.color}</p>
                                            <p className="text-gray-400">{new Date(game.createdAt).toLocaleString()}</p>
                                        </div>
                                        <div className="flex flex-col w-[10%] justify-center text-center items-center">
                                            <p className={`${game.isWinner ? "text-green-500": "text-red-500"}`}>{game.isWinner == null  ? "Wait for result..." : game.isWinner ? "Won" : "Loss" }</p>
                                            <p className="text-gray-400">Bet : {game.stake}</p>
                                        </div>   
                                    </li>
                                ))}
                            </ul>
                    </div>
                }

                { selectedTab === "gameHistory" && gameHistory?.length === 0 &&
                    <div className="w-full h-full flex items-center justify-center">
                        <p className="text-gray-400">No game history available.</p>
                    </div>
                }

                { selectedTab === "myHistory" && myHistory?.length === 0 &&
                    <div className="w-full h-full flex items-center justify-center">
                        <p className="text-gray-400">No personal history available.</p>
                    </div>
                }
                
             </div>
        </div>
      </div>
    </Layout>
  );
};
