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
  console.log(json.record.posts[0].author);
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

        <div className="grid grid-cols-3 px-40 gap-6 pb-20">
          <ArticleVacances />
          <ArticleVacances />
          <ArticleVacances />
          <ArticleVacances />
          <ArticleVacances />
          <ArticleVacances />
        </div>

        <button className="font-bold border border-blue-dark rounded-3xl p-3 block mx-auto">
          Ver mais vagas
        </button>
      </div>
    </Suspense>
  );
}
