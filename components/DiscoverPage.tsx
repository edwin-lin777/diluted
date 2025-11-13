"use client";
import React, { useState } from "react";

const DiscoverPage = ({ image, description, name }) => {
  const [long, setLonged] = useState(false);
  const [short, setShorted] = useState(false);
  const [neutral, setNeutral] = useState(false);

  return (
    <div className="h-screen w-screen overflow-hidden border-3 mb-5 top-0 fixed flex flex-col">
      <div className=" mt-25 border-2 w-[90%] mx-auto h-3/4 rounded-xl relative flex justify-center">
        <button
          className="absolute rounded-xl border-2 top-6 right-4 px-4 py-2 hover:cursor-pointer"
          onClick={() => setLonged(!long)}
        >
          Long
        </button>
        <button
          className="absolute rounded-xl border-2 top-6 px-4 py-2 hover:cursor-pointer"
          onClick={() => console.log(long)}
        >
          Neutral
        </button>
        <button className="absolute rounded-xl border-2 top-6 left-4 px-4 py-2 hover:cursor-pointer">
          Short
        </button>
      </div>
    </div>
  );
};

export default DiscoverPage;
