import Bubble from "@/components/bubble";
import Loading from "@/components/loading";
import ArticleVacances from "@/components/vacances/article-vacances";
import EspecialityVacances from "@/components/vacances/especiality-vacances";
import SearchVacances from "@/components/vacances/search-vacances";
import TitleVacances from "@/components/vacances/title-vacances";
import IResponseApi from "@/models/response-api.interface";
import { Suspense } from "react";

export default async function PageVacances() {
  const response = await fetch(
    "https://api.jsonbin.io/v3/b/67be1eaaacd3cb34a8f06a64"
  );
  const json: IResponseApi = await response.json();
  return (
    <Suspense fallback={<Loading />}>
      <div className="bg-gray-pattern pb-20">
        <Bubble />

        <TitleVacances />

        <SearchVacances />

        <EspecialityVacances />

        <h1 className="font-bold text-2xl text-center pb-11">
          Vagas Disponíveis
        </h1>

        <ArticleVacances jobs={json.record.jobs} />

        <button className="font-bold border border-blue-dark rounded-3xl p-3 block mx-auto">
          Ver mais vagas
        </button>
      </div>
    </Suspense>
  );
}
