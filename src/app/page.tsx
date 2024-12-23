import Card from "@/components/card";
import HeroSection from "@/components/hero-section";

// MOCK
const maisVisualizados = [
  {
    author: "Lucas Lima",
    date: new Date("2024-12-10"),
    title: "Como otimizar o desempenho de aplicações web",
    description:
      "Aprenda técnicas essenciais para otimizar o desempenho de aplicações web, focando em performance.",
  },
  {
    author: "Lucas Lima",
    date: new Date("2024-11-25"),
    title: "Estratégias de SEO para websites modernos",
    description:
      "Entenda como melhorar o SEO de seu site, garantindo melhor visibilidade nos motores de busca.",
  },
  {
    author: "Lucas Lima",
    date: new Date("2024-11-15"),
    title: "Boas práticas no desenvolvimento de Frontend",
    description:
      "Descubra as melhores práticas no desenvolvimento de interfaces de usuário com tecnologias modernas.",
  },
  {
    author: "Lucas Lima",
    date: new Date("2024-10-30"),
    title: "Desenvolvendo aplicações mobile com React Native",
    description:
      "Um guia prático para começar a desenvolver aplicações móveis usando o React Native.",
  },
  {
    author: "Lucas Lima",
    date: new Date("2024-10-05"),
    title: "Integrando APIs externas em seu projeto web",
    description:
      "Aprenda a integrar APIs externas e utilizar dados de outras plataformas em seu projeto web.",
  },
  {
    author: "Lucas Lima",
    date: new Date("2024-09-18"),
    title: "Utilizando Git no fluxo de trabalho de equipes",
    description:
      "Entenda como usar o Git para versionamento de código e colaborar efetivamente em equipe.",
  },
];

// MOCK
const ultimosPosts = [
  {
    author: "Lucas Lima",
    date: new Date("2024-12-20"),
    title: "Introdução ao desenvolvimento web com React",
    description:
      "Inicie sua jornada no desenvolvimento web com a poderosa biblioteca React para interfaces dinâmicas.",
  },
  {
    author: "Lucas Lima",
    date: new Date("2024-12-15"),
    title: "Como criar um site responsivo do zero",
    description:
      "Aprenda a construir sites responsivos, otimizados para qualquer dispositivo e tamanho de tela.",
  },
  {
    author: "Lucas Lima",
    date: new Date("2024-12-10"),
    title: "Frameworks de CSS para desenvolvimento ágil",
    description:
      "Descubra os melhores frameworks de CSS para acelerar o processo de desenvolvimento de sites.",
  },
  {
    author: "Lucas Lima",
    date: new Date("2024-12-05"),
    title: "Como usar Node.js no backend de suas aplicações",
    description:
      "Entenda os fundamentos de Node.js e como utilizá-lo para construir backends poderosos.",
  },
  {
    author: "Lucas Lima",
    date: new Date("2024-11-30"),
    title: "Desenvolvimento de APIs RESTful com Express",
    description:
      "Aprenda a criar APIs RESTful utilizando o Express, um dos frameworks mais populares para Node.js.",
  },
  {
    author: "Lucas Lima",
    date: new Date("2024-11-25"),
    title: "Desvendando o uso de Webpack no desenvolvimento web",
    description:
      "Explore o Webpack, uma poderosa ferramenta de bundling e otimização de projetos web.",
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl m-auto flex flex-col">
      <HeroSection title="Mais Visualizados">
        {maisVisualizados.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </HeroSection>

      <HeroSection title="Últimos Posts">
        {ultimosPosts.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </HeroSection>
    </div>
  );
}
