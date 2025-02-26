import Image from "next/image";

export default function SearchVacances() {
  return (
    <div className="w-[300px] flex border border-blue-dark  h-12 items-center justify-between rounded-full px-8 mb-11 mx-auto bg-white md:w-[468px]">
      <input
        type="text"
        placeholder="Pesquise por vagas..."
        className="w-full outline-none pr-1"
      />
      <span className="cursor-pointer">
        <Image src={"/images/search.png"} width={24} height={24} alt="search" />
      </span>
    </div>
  );
}
