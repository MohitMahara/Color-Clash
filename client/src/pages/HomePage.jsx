import { AmountCard } from "../Components/Card/AmountCard";
import { ColorCard } from "../Components/Card/ColorCard";
import { RegisteredUsers } from "../Components/HomePage/RegisteredUsers";
import { RoundTracker } from "../Components/HomePage/RoundTracker";
import { Timer } from "../Components/HomePage/Timer";
import Layout from "../Components/Layout/Layout";

export default function HomePage() {
  return (
    <Layout>
      <div className="bg-gray-800 w-full p-6 min-h-screen">
        <div className="flex justify-between w-full">
          <Timer/>
          <RoundTracker/>
          <RegisteredUsers/>
        </div>
       
       <div className="flex items-center justify-between mt-10 md:w-3xl mx-auto max-w-full  h-[200px] md:h-[300px]">
           <ColorCard color={"Red"} />
           <ColorCard color={"Blue"} />
           <ColorCard color={"Green"} />
       </div>

       <div className="flex items-center justify-center gap-4 mt-10 bg-gray-700 md:w-2xl mx-auto max-w-full rounded-lg px-2">
            <AmountCard amount={0.1} />
            <AmountCard amount={0.2} />
            <AmountCard amount={0.5} />
            <AmountCard amount={1} />
            <AmountCard amount={2} />
            <AmountCard amount={5} />
       </div>

       <div className="flex items-center justify-center mt-10">
         <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
           Start Game
         </button>
        </div> 

       </div>
    </Layout>
  );
}
