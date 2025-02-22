import { formatDate } from "@/utils/format-date";
import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface IMetaInfo extends HTMLAttributes<HTMLDivElement> {
  name: string;
  date: Date;
}

const MetaInfo = ({ name, date, ...rest }: IMetaInfo) => {
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
    </div>
  );
};

export default MetaInfo;
