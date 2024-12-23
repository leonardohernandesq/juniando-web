import Card from "@/components/card";
import HeroSection from "@/components/hero-section";

// MOCK
const maisVisualizados = [
  {
    author: "Lucas Lima",
    date: new Date("2024-12-10"),
    title: "Como otimizar o desempenho de aplicações web",
    description:
      "Aprenda técnicas essenciais para otimizar o desempenho de aplicações web, focando em performance, uso de cache, lazy loading e melhorias no tempo de resposta. Com essas práticas, você pode melhorar a experiência do usuário e a eficiência dos seus sistemas.",
    image:
      "https://miro.medium.com/v2/resize:fit:2000/1*xzx8MaiCyte-gfmykad87w.jpeg",
  },
  {
    author: "Lucas Lima",
    date: new Date("2024-11-25"),
    title: "Estratégias de SEO para websites modernos",
    description:
      "Entenda como melhorar o SEO de seu site, garantindo melhor visibilidade nos motores de busca, por meio de otimização on-page, link building, e estratégias de conteúdo focadas no usuário e nas tendências de busca mais atuais.",
    image:
      "https://liveseo.com.br/wp-content/uploads/2024/04/0ea6d5d7f5f443a37288b7ca39a6dce7_PrincipaisestratgiasdecontedoSEOparablog.jpg",
  },
  {
    author: "Lucas Lima",
    date: new Date("2024-11-15"),
    title: "Boas práticas no desenvolvimento de Frontend",
    description:
      "Descubra as melhores práticas no desenvolvimento de interfaces de usuário com tecnologias modernas, incluindo design responsivo, uso adequado de frameworks e otimização de performance para garantir uma excelente experiência ao usuário.",
    image:
      "https://blog.dankicode.com/wp-content/uploads/2020/06/melhores-praticas-em-desenvolvimento-web-650x400.jpg",
  },
  {
    author: "Lucas Lima",
    date: new Date("2024-10-30"),
    title: "Desenvolvendo aplicações mobile com React Native",
    description:
      "Um guia prático para começar a desenvolver aplicações móveis usando o React Native, explorando a criação de componentes reutilizáveis, navegação entre telas, integração com APIs e otimização para diferentes plataformas móveis.",
    image:
      "https://hermes.dio.me/articles/cover/7fb71cfd-36e5-4387-a488-14b09989cf96.jpg",
  },
  {
    author: "Lucas Lima",
    date: new Date("2024-10-05"),
    title: "Integrando APIs externas em seu projeto web",
    description:
      "Aprenda a integrar APIs externas e utilizar dados de outras plataformas em seu projeto web, incluindo o processo de autenticação, uso de requisições assíncronas e como lidar com erros ao consumir APIs em tempo real.",
    image:
      "https://images.squarespace-cdn.com/content/v1/6048e1e3156d3f059791beae/1706546913913-9GKXCYHUYVJ0GOAQC5ZN/como-integrar-um-gateway-de-pagamento-em-sistema-de-gestao-de-assinaturas-gateway-de-pagamento-iopay.jpg",
  },
  {
    author: "Lucas Lima",
    date: new Date("2024-09-18"),
    title: "Utilizando Git no fluxo de trabalho de equipes",
    description:
      "Entenda como usar o Git para versionamento de código e colaborar efetivamente em equipe, abordando práticas recomendadas para branching, commits, merge e uso de ferramentas como GitHub e GitLab.",
    image: "https://bearstech.com/sites/default/files/2024-09/Board.png",
  },
];

// MOCK
const ultimosPosts = [
  {
    author: "Lucas Lima",
    date: new Date("2024-12-20"),
    title: "Introdução ao desenvolvimento web com React",
    description:
      "Inicie sua jornada no desenvolvimento web com a poderosa biblioteca React para interfaces dinâmicas, entendendo seus fundamentos, componentes, estado e ciclo de vida, além de boas práticas para otimização do desempenho das aplicações.",
    image:
      "https://andersoncarvalho.pro.br/wp-content/uploads/2023/09/Capa-700x329.png",
  },
  {
    author: "Lucas Lima",
    date: new Date("2024-12-15"),
    title: "Como criar um site responsivo do zero",
    description:
      "Aprenda a construir sites responsivos, otimizados para qualquer dispositivo e tamanho de tela, abordando o uso de media queries, design flexível e frameworks como Bootstrap e Tailwind CSS para facilitar a adaptação às telas de diferentes tamanhos.",
    image:
      "https://neilpatel.com/wp-content/uploads/2019/06/dispositivos-acessando-o-mesmo-site-responsivo.jpeg",
  },
  {
    author: "Lucas Lima",
    date: new Date("2024-12-10"),
    title: "Frameworks de CSS para desenvolvimento ágil",
    description:
      "Descubra os melhores frameworks de CSS para acelerar o processo de desenvolvimento de sites, incluindo CSS Grid, Flexbox e frameworks como Tailwind, que oferecem classes utilitárias para facilitar a criação de layouts responsivos e eficientes.",
    image:
      "https://blog.cronapp.io/wp-content/uploads/2020/05/framworks-post.jpg",
  },
  {
    author: "Lucas Lima",
    date: new Date("2024-12-05"),
    title: "Como usar Node.js no backend de suas aplicações",
    description:
      "Entenda os fundamentos de Node.js e como utilizá-lo para construir backends poderosos, incluindo a criação de servidores com Express, manipulação de banco de dados e integração com APIs externas.",
    image:
      "https://kinsta.com/wp-content/uploads/2021/03/Nodejs-Architecture.png",
  },
  {
    author: "Lucas Lima",
    date: new Date("2024-11-30"),
    title: "Desenvolvimento de APIs RESTful com Express",
    description:
      "Aprenda a criar APIs RESTful utilizando o Express, um dos frameworks mais populares para Node.js, com práticas recomendadas de estruturação de rotas, validação de dados e autenticação de usuários usando JWT.",
    image:
      "https://miro.medium.com/v2/resize:fit:2732/1*CLf2MbiumJ4rjRvaZtMWig.png",
  },
  {
    author: "Lucas Lima",
    date: new Date("2024-11-25"),
    title: "Desvendando o uso de Webpack no desenvolvimento web",
    description:
      "Explore o Webpack, uma poderosa ferramenta de bundling e otimização de projetos web, incluindo sua configuração básica, plugins, loaders e como ele pode melhorar a performance do seu aplicativo web.",
    image:
      "https://www.webdevdrops.com/_next/image?url=%2Fwebpack-sem-medo-introducao-af889eb659e7%2Fimages%2Fwebpack-1.png&w=3840&q=75",
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
