"use client";

import Image from "next/image";
import FooterMenu from "./footer-menu";
import useContributors from "../hooks/useContributors";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { contributors } = useContributors("ilucaslima", "juniando-web");

  const footerMenuCol1 = [
    { href: "#", children: "Quem Somos" },
    { href: "#", children: "Vagas" },
    { href: "#", children: "Artigos" },
    { href: "#", children: "Política de Privacidade" },
    { href: "#", children: "Área Reservada" },
  ];

  const footerMenuCol2 = [
    { href: "#", children: "React" },
    { href: "#", children: "NextJS" },
    { href: "#", children: "JavaScript" },
    { href: "#", children: "Python" },
    { href: "#", children: "C#" },
    { href: "#", children: "Java" },
    { href: "#", children: "NodeJS" },
  ];

  const footerMenuCol3 = [
    { href: "#", children: "Frontend Jr" },
    { href: "#", children: "Backend Jr" },
    { href: "#", children: "FullStack Jr" },
    { href: "#", children: "Trainee" },
    { href: "#", children: "Estagio" },
  ];

  return (
    <footer className="pt-16 bg-principal-secondary relative overflow-hidden">
      <Image
        className="z-0 absolute left-0 top-0 -rotate-180"
        src={"/images/footer-detail-r.png"}
        alt=""
        width={202}
        height={260}
        quality={100}
      />
      <div className="relative z-10 h-full flex flex-col">
        <div className="grid grid-cols-1 w-full max-w-md m-auto flex-1 justify-items-center gap-4 px-5 md:grid-cols-4 md:max-w-6xl md:gap-14 text-white ">
          <div className="flex flex-col w-full">
            <Image
              src={"/images/logo-white.png"}
              alt="Logo da Juniando"
              width={120}
              height={78}
            />
            <p className="mt-4">
              Onde a tecnologia encontra e impulsiona novos talentos!
            </p>
            {contributors.length > 0 && (
              <>
                <h3 className="mt-4 mb-2 font-bold">Contribuidores</h3>
                <div className="grid grid-cols-5 gap-2 items-end">
                  {contributors.map((contributor) => (
                    <Link
                      key={contributor.login}
                      title={contributor.login}
                      href={contributor.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center"
                    >
                      <Image
                        src={contributor.avatar_url}
                        alt={`Avatar de ${contributor.login}`}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    </Link>
                  ))}
                  <Link
                    className="text-2xl"
                    href={
                      "https://github.com/ilucaslima/juniando-web/graphs/contributors"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ...
                  </Link>
                </div>
              </>
            )}
          </div>
          <FooterMenu title="Menu" links={footerMenuCol1} />
          <FooterMenu title="Artigos" links={footerMenuCol2} />
          <FooterMenu title="Vagas" links={footerMenuCol3} />
        </div>
        <p className="text-center pb-2 pt-16 opacity-70 text-white">
          Copyright © 2022-{currentYear} - Juniando
        </p>
      </div>
      <Image
        className="z-0 absolute right-[-40] bottom-0"
        src={"/images/footer-detail-r.png"}
        alt=""
        width={202}
        height={260}
        quality={100}
      />
    </footer>
  );
};

export default Footer;
