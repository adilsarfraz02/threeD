import React from "react";
import Tts from "../components/Tts";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-default">
      <h1 className="text-2xl">Text To Speech</h1>
      <Tts />
    </div>
  );
};

export default page;
