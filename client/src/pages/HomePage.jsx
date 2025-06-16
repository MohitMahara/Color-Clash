import Layout from "../Components/Layout/Layout";
import React from "react";

export default function HomePage() {
  return (
    <Layout>
      <div className="bg-gray-800 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-center mt-10">
          Welcome to the Home Page
        </h1>
        <p className="text-lg text-center mt-4">
          This is a simple home page built with React and Tailwind CSS.
        </p>
      </div>
    </Layout>
  );
}
