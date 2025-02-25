import IResponseJson from "@/models/response-json.interface";
import Image from "next/image";

export default async function PageVacances() {
  const response = await fetch(
    "https://api.jsonbin.io/v3/b/67be1eaaacd3cb34a8f06a64",
    {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + "67be03cdad19ca34f811dc55",
      },
    }
  );
  const json: IResponseJson = await response.json();
  console.log(json.record.posts);
  return (
    <div>
      <div className="bg-blue-dark text-center text-4xl py-20 text-white font-semibold mb-11">
        Vagas para <br />{" "}
        <span className="text-yellow-title">Desenvolvedores Jr</span>
      </div>

      <div className="flex border border-dark-blue w-[468px] h-12 items-center justify-between rounded-full px-8 mb-11 mx-auto">
        <input type="text w-full" placeholder="Pesquise por vagas..." />
        <span>
          <Image
            src={"/images/search.png"}
            width={24}
            height={24}
            alt="search"
          />
        </span>
      </div>
    </div>
  );
}
