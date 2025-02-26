import Image from "next/image";
import FooterMenu from "./footer-menu";
import ForksList from "./contributorList";
import { footerMenuCol1, footerMenuCol2, footerMenuCol3 } from "./links-footer";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16 bg-principal-secondary relative overflow-hidden">
      <Image
        className="z-0 absolute left-0 top-0 -rotate-180"
        src={"/images/footer-detail-r.png"}
        alt="Detalhe do footer"
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
            <ForksList
              priorityContribuitors={["leonardohernandesq", "Daniel-san8"]}
            />
          </div>
          <FooterMenu title="Menu" links={footerMenuCol1} />
          <FooterMenu title="Artigos" links={footerMenuCol2} />
          <FooterMenu title="Vagas" links={footerMenuCol3} />
        </div>
        <p className="text-center text-sm pb-2 pt-12 opacity-70 text-white">
          Copyright © {currentYear} - Juniando
        </p>
      </div>
      <Image
        className="z-0 absolute right-[-40] bottom-0"
        src={"/images/footer-detail-r.png"}
        alt="Detalhe do footer"
        width={202}
        height={260}
        quality={100}
      />
    </footer>
  );
};

export default Footer;
