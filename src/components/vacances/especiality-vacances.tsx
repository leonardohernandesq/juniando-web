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
    <div className="lg:flex lg:justify-center lg:gap-x-11 lg:pb-10">
      {especialities.map(({ especiality }, index) => (
        <div
          key={index}
          className={`${selectedEspeciality === especiality ? "lg:bg-blue-600 lg:text-white" : "lg:bg-white lg:text-black"} lg:py-4 lg:px-6 lg:rounded-2xl lg:cursor-pointer lg:font-bold lg:shadow-md`}
          onClick={() => setSelectedEspeciality(especiality)}
        >
          {especiality}
        </div>
      ))}
    </div>
  );
}
