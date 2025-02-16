import Image from "next/image";

interface IMissionBox {
  icon: string;
  alt: string;
  title: string;
  description: string;
}

const MissionBox = ({ icon, alt, title, description }: IMissionBox) => {
  return (
    <div className="w-full p-5 border border-light-gray-200 rounded-2xl shadow-lg">
      <Image
        src={`/images/${icon}`}
        width={50}
        height={50}
        alt={alt || "Mission Icon"}
      />
      <h3 className="font-bold text-xl my-3 text-dark-100">{title}</h3>
      <div className="text-gray-600">{description}</div>
    </div>
  );
};

export default MissionBox;
