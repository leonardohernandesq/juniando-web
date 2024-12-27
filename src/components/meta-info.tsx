import { formatDate } from "@/utils/format-date";
import React from "react";

interface IMetaInfo {
  name: string;
  date: Date;
}

const MetaInfo = ({ name, date }: IMetaInfo) => {
  return (
    <div className="flex items-center gap-2 text-dark-100 text-xs font-medium">
      <span>{name}</span>
      <span className="bg-principal w-1 h-1 rounded-full" />
      <span>{formatDate(date)}</span>
    </div>
  );
};

export default MetaInfo;
