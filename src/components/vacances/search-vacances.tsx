import Image from "next/image";

export default function SearchVacances() {
  return (
    <div className="lg:flex border lg:border-blue-dark lg:w-[468px] lg:h-12 lg:items-center lg:justify-between lg:rounded-full lg:px-8 lg:mb-11 lg:mx-auto lg:bg-white">
      <input
        type="text"
        placeholder="Pesquise por vagas..."
        className="lg:w-full lg:outline-none lg:pr-1"
      />
      <span className="lg:cursor-pointer">
        <Image src={"/images/search.png"} width={24} height={24} alt="search" />
      </span>
    </div>
  );
}
