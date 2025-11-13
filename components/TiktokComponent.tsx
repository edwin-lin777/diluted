"use client";
import connectToDatabase from "../lib/mongodb";
import React, { useState, useEffect } from "react";

const TiktokCompoent = () => {
  const [long, setLonged] = useState(false);
  const [short, setShorted] = useState(false);
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch("/api/getStartupStuff")
      .then((res) => res.json())
      .then((data) => setDescription(data.description));
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden border-3 mb-5 top-0 fixed flex flex-col">
      <div className=" mt-25 border-2 w-[90%] mx-auto h-3/4 rounded-xl relative flex justify-center">
        <button
          className="absolute rounded-xl border-2 top-6 right-4 px-4 py-2 hover:cursor-pointer"
          onClick={() => setLonged(!long)}
        >
          Long
        </button>
        <div className="border-1 ">{description}</div>
        <button
          className="absolute rounded-xl border-2 top-6 left-4 px-4 py-2 hover:cursor-pointer"
          onClick={() => setLonged(!short)}
        >
          Short
        </button>
      </div>
    </div>
  );
};

export default TiktokCompoent;
