import { formatDate } from "@/utils/format-date";
import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { FaEye } from "react-icons/fa6";

interface IMetaInfo extends HTMLAttributes<HTMLDivElement> {
  name: string;
  date: Date;
  view?: number;
}

const MetaInfo = ({ name, date, view, ...rest }: IMetaInfo) => {
  const { className, ...props } = rest;
  return (
    <div
      className={twMerge(
        "flex items-center gap-2 text-dark-100 text-xs font-medium",
        className
      )}
      {...props}
    >
      <span>{name}</span>
      <span className="bg-principal w-1 h-1 rounded-full" />
      <span>{formatDate(date)}</span>
      {!!view && (
        <div className="flex items-center gap-1">
          <span className="bg-principal w-1 h-1 rounded-full mr-1" />
          <span>{view}</span>
          <FaEye />
        </div>
      )}
    </div>
  );
};

export default MetaInfo;
