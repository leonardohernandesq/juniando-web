import IResponseJson from "@/models/response-json.interface";

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
    <div className="bg-blue-dark text-center text-4xl py-20 text-white font-semibold">
      Vagas para <br />{" "}
      <span className="text-yellow-title">Desenvolvedores Jr</span>
    </div>
  );
}
