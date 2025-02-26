"use client";

import { useState } from "react";

export default function EspecialityVacances() {
  const [selectedEspeciality, setSelectedEspeciality] =
    useState<string>("Back-end");

  const especialities = [
    {
      especiality: "Back-end",
    },
    {
      especiality: "Front-end",
    },
    {
      especiality: "Estágio",
    },
  ];

  return (
    <div className="flex justify-center gap-x-11 pb-10">
      {especialities.map(({ especiality }, index) => (
        <div
          key={index}
          className={`${selectedEspeciality === especiality ? "bg-blue-600 text-white" : "bg-white text-black"} py-4 px-6 rounded-2xl cursor-pointer font-bold shadow-md`}
          onClick={() => setSelectedEspeciality(especiality)}
        >
          {especiality}
        </div>
      ))}
    </div>
  );
}
