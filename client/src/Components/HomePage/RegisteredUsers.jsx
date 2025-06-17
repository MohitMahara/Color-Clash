import React from "react";
import { FaRegUser } from "react-icons/fa";

export const RegisteredUsers = () => {
    return (
        <div className="flex items-center justify-center gap-2">
            <FaRegUser className="text-green-500"/>
            <p className="text-sm md:text-xl text-green-500 font-seminbold">45</p>
        </div>
    );
}