import Bubble from "@/components/bubble";
import Loading from "@/components/loading";
import ArticleVacances from "@/components/vacances/article-vacances";
import DialogVacances from "@/components/vacances/dialog-vacandes";
import EspecialityVacances from "@/components/vacances/especiality-vacances";
import SearchVacances from "@/components/vacances/search-vacances";
import TitleVacances from "@/components/vacances/title-vacances";
import IResponseJson from "@/models/response-json.interface";
import { Suspense } from "react";

const mockJob = {
  titleJob: "Desenvolvedor Back-end Jr",
  description:
    "Criar e desenvolver softwares, sistemas, sites, aplicativos e soluções para plataformas web, desktop e mobile. Escrever códigos bem estruturados, eficientes e testáveis utilizando as melhores práticas de desenvolvimento de softwares; Criar layout/interface de usuário de sites usando práticas padrão de HTML/CSS; Integrar dados de vários serviços de back-end e bancos de dados; Reunir e refinar especificações e requisitos com base em necessidades técnicas; Criar e manter documentação de softwares.",
  benefits: ["Estacionamento", "Restaurante na empresa"],
  formation:
    "FORMAÇÃO: Técnico em TI ou cursando Superior em Análise e Desenvolvimento de Sistemas",
  email: "lucaslima@gmail.com",
};

export default async function PageVacances() {
  const response = await fetch(
    "https://api.jsonbin.io/v3/b/67be1eaaacd3cb34a8f06a64",
    {
      cache: "no-cache",
    }
  );
  const json: IResponseJson = await response.json();
  console.log(json.record.jobs[0].description);
  return (
    <Suspense fallback={<Loading />}>
      <div className="lg:bg-gray-pattern lg:pb-20">
        <Bubble />

        <TitleVacances />

        <SearchVacances />

        <EspecialityVacances />

        <h1 className="lg:font-bold lg:text-2xl lg:text-center lg:pb-11">
          Vagas Disponíveis
        </h1>

        <ArticleVacances contentDialog={json.record.jobs[0].description} />

        <button className="lg:font-bold lg:border lg:border-blue-dark lg:rounded-3xl lg:p-3 lg:block lg:mx-auto">
          Ver mais vagas
        </button>
      </div>
    </Suspense>
  );
}
