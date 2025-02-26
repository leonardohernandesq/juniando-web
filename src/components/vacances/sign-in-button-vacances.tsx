"use client";

import { useState } from "react";

const mockJob = {
  titleJob: "Desenvolvedor Back-end Jr",
  description:
    "Criar e desenvolver softwares, sistemas, sites, aplicativos e soluções para plataformas web, desktop e mobile. Escrever códigos bem estruturados, eficientes e testáveis utilizando as melhores práticas de desenvolvimento de softwares; Criar layout/interface de usuário de sites usando práticas padrão de HTML/CSS; Integrar dados de vários serviços de back-end e bancos de dados; Reunir e refinar especificações e requisitos com base em necessidades técnicas; Criar e manter documentação de softwares.",
  benefits: ["Estacionamento", "Restaurante na empresa"],
  formation:
    "FORMAÇÃO: Técnico em TI ou cursando Superior em Análise e Desenvolvimento de Sistemas",
  email: "lucaslima@gmail.com",
};

export default function SignInButton() {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        onClick={() => setDialogOpen(!dialogOpen)}
        className="lg:bg-blue-dark lg:rounded-full lg:text-white lg:py-1 lg:px-3 lg:font-bold"
      >
        Cadastre-se
      </button>
      {dialogOpen ? (
        <dialog
          open={true}
          className="p-12 absolute z-20 mx-72 rounded-md top-1/2"
        >
          <h1 className="pb-4">{mockJob.titleJob}</h1>
          <div className="flex flex-col">
            <p>Responsabilidades: {mockJob.description}</p>
            <p>Benefícios:</p>
            <p>{mockJob.benefits}</p>
            <p>Formação Acadêmica:</p>
            <p>{mockJob.formation}</p>
            <p>Enviar Currículo para: {mockJob.email}</p>
          </div>

          <button className="p-3 text-white font-bold block mx-auto mt-9 bg-blue-600 rounded-xl">
            Ver mais vagas
          </button>
        </dialog>
      ) : null}
    </div>
  );
}
