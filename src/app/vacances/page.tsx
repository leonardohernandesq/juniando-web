import Bubble from "@/components/bubble";
import Loading from "@/components/loading";
import ArticleVacances from "@/components/vacances/article-vacances";
import EspecialityVacances from "@/components/vacances/especiality-vacances";
import SearchVacances from "@/components/vacances/search-vacances";
import TitleVacances from "@/components/vacances/title-vacances";
import IResponseJson from "@/models/response-json.interface";
import { Suspense } from "react";

export default async function PageVacances() {
  const response = await fetch(
    "https://api.jsonbin.io/v3/b/67be1eaaacd3cb34a8f06a64",
    {
      cache: "no-cache",
    }
  );
  const json: IResponseJson = await response.json();
  console.log(json);
  return (
    <Suspense fallback={<Loading />}>
      <div className="lg:bg-gray-pattern lg:pb-20 relative">
        <Bubble />

        <TitleVacances />

        <SearchVacances />

        <EspecialityVacances />

        <h1 className="lg:font-bold lg:text-2xl lg:text-center lg:pb-11">
          Vagas Disponíveis
        </h1>

        <ArticleVacances />

        <button className="lg:font-bold lg:border lg:border-blue-dark lg:rounded-3xl lg:p-3 lg:block lg:mx-auto">
          Ver mais vagas
        </button>
      </div>
    </Suspense>
  );
}
