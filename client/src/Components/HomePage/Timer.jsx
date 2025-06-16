import React, {useState, useEffect} from "react";

export const Timer = () => {
    return(
       <>
          <div className="flex flex-row items-center justify-center p-2 bg-black rounded-lg">
              <p className="text-red-500 text-2xl font-semibold">02 </p>
              <p className="text-red-500 text-2xl font-semibold"> :</p>
              <p className="text-red-500 text-2xl font-semibold"> 00</p>
          </div>
       </>
    );
}