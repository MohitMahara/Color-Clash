import React from "react";
import { NavLink } from "react-router-dom";

export const AuthHeader = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto pt-3">
          <NavLink to={"/"}>
            <h1 className="text-3xl font-bold text-gray-800">
              Color Clash
            </h1>
          </NavLink>
        </div>
      </div>
    </>
  );
};