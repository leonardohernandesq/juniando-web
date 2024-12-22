import React from "react";

import Image from "next/image";

import ExampleCard from "@/assets/example-card.png";
import MetaInfo from "@/components/meta-info";

interface ICard {
  title: string;
  description: string;
  date: Date;
  author: string;
}

const Card = ({ title, description, date, author }: ICard) => {
  return (
    <div className="bg-light rounded-b-xl drop-shadow-principal">
      <Image src={ExampleCard} alt="Exemplo" className="w-full" />
      <div className="p-8">
        <MetaInfo name={author} date={date} />
        <h1 className="text-dark-100 pt-4 pb-1 text-xl font-semibold">
          {title}
        </h1>
        <p className="text-dark-100 text-xs line-clamp-6 md:line-clamp-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
