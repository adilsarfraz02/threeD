"use client";
import React, { useState, useRef } from "react";

const Tts = () => {
  const [textToSpeak, setTextToSpeak] = useState("");
  const synthRef = useRef(window.speechSynthesis);
  const handleInputChange = (event) => {
    setTextToSpeak(event.target.value);
  };

  const speakText = () => {
    if (!synthRef.current.speaking) {
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      synthRef.current.speak(utterance);
    }
  };
return (
  <div className="flex flex-col justify-center items-center">
    <input className="mb-4 py-2 px-4 rounded-2xl text-danger" type="text" value={textToSpeak} onChange={handleInputChange} />
    <button className="py-2 px-4 rounded-2xl bg-danger-100" onClick={speakText}>Speak</button>
  </div>
);
};

export default Tts;
