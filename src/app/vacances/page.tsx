import EspecialityVacances from "@/components/vacances/especiality-vacances";
import SearchVacances from "@/components/vacances/search-vacances";
import TitleVacances from "@/components/vacances/title-vacances";
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
    <div>
      <TitleVacances />

      <SearchVacances />

      <EspecialityVacances />
    </div>
  );
}
