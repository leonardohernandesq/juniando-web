import React from "react";

interface IMetaInfo {
  name: string;
  date: Date;
}

const MetaInfo = ({ name, date }: IMetaInfo) => {
  const dateFormatted = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "UTC",
  }).format(date);

  return (
    <div className="flex items-center gap-3 text-dark-100 text-sm font-medium">
      <span>{name}</span>
      <span className="bg-principal w-1 h-1 rounded-full" />
      <span>{dateFormatted}</span>
    </div>
  );
};

export default MetaInfo;
