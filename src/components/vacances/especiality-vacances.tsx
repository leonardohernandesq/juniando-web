"use client";

import { useState } from "react";

export default function EspecialityVacances() {
  const [selectedEspeciality, setSelectedEspeciality] =
    useState<string>("Back-end");

  const especialities = [
    {
      especiality: "Back-end",
      id: 1,
    },
    {
      especiality: "Front-end",
      id: 2,
    },
    {
      especiality: "Estágio",
      id: 3,
    },
  ];

  return (
    <div className="flex justify-center gap-x-4 pb-10 md:gap-x-11">
      {especialities.map(({ especiality, id }) => (
        <div
          key={id}
          className={`${selectedEspeciality === especiality ? "bg-blue-600 text-white" : "bg-white text-black"} py-4 px-6 rounded-2xl cursor-pointer font-bold shadow-md text-nowrap`}
          onClick={() => setSelectedEspeciality(especiality)}
        >
          {especiality}
        </div>
      ))}
    </div>
  );
}
