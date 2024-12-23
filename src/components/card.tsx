import Image from "next/image";

import MetaInfo from "@/components/meta-info";
import truncateText from "@/utils/truncate-text";

interface ICard {
  date: Date;
  image: string;
  title: string;
  author: string;
  description: string;
}

const Card = ({ title, description, date, author, image }: ICard) => {
  return (
    <div className="bg-light rounded-b-xl drop-shadow-principal">
      <Image
        src={image}
        alt={title}
        className="w-full h-56 object-cover pointer-events-none"
        width={1280}
        height={720}
      />
      <div className="p-8">
        <MetaInfo name={author} date={date} />
        <h1 className="text-dark-100 pt-4 pb-1 text-xl font-semibold truncated-title">
          {title}
        </h1>
        <p className="text-dark-100 text-xs line-clamp-6 md:line-clamp-4">
          {truncateText(description, 100)}
        </p>
      </div>
    </div>
  );
};

export default Card;
