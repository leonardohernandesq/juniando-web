import Image from "next/image";
import React from "react";
import MetaInfo from "./meta-info";

interface IPrincipalCard {
  image: string;
  title: string;
  author: string;
  date: string | Date;
}

const PrincipalCard = ({ image, title, author, date }: IPrincipalCard) => {
  return (
    <div className="relative">
      <Image
        src={image}
        alt="post react"
        width={745}
        height={412}
        className="h-full"
      />
      <div className="w-full absolute bottom-1 left-0 p-7 pt-20 z-50">
        <div className="-z-10 absolute w-full inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg" />
        <h1 className="text-3xl font-bold text-light">{title}</h1>
        <MetaInfo
          className="text-light text-xl mt-4"
          name={author}
          date={new Date(date)}
        />
      </div>
    </div>
  );
};

export default PrincipalCard;
