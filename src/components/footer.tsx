import Image from "next/image";
import Link from "next/link";
import { Input } from "./input";
import Linkedin from "./icons/linkedin";
import Instagram from "./icons/instagram";
import Github from "./icons/github";
import ArrowRight from "./icons/arrow-right";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="md:h-72 h-auto pt-8 md:pt-2 bg-primary relative overflow-hidden">
      <Image
        className="z-0 absolute left-0 top-0 -rotate-180"
        src={"/images/footer-detail-r.png"}
        alt=""
        width={202}
        height={260}
        quality={100}
      />
      <div className="relative z-10 h-full flex flex-col">
        <div className="grid grid-cols-1 w-full max-w-md m-auto flex-1 justify-items-center items-center gap-4 px-5 md:grid-cols-3 md:max-w-6xl md:gap-32">
          <div className="flex flex-col items-center">
            <Image
              src={"/images/logo-white.png"}
              alt="Logotipo do Juniando"
              width={184}
              height={122}
            />
            <div className="flex gap-3 mt-2">
              <Link
                className="hover:scale-110 duration-500"
                href={"https://linkedin.com"}
                target="_blank"
              >
                <Linkedin className="stroke-white stroke-2" />
              </Link>
              <Link
                className="hover:scale-110 duration-500"
                href={"https://instagram.com"}
                target="_blank"
              >
                <Instagram className="stroke-white stroke-2" />
              </Link>
              <Link
                className="hover:scale-110 duration-500"
                href={"https://github.com"}
                target="_blank"
              >
                <Github className="stroke-white stroke-2" />
              </Link>
            </div>
          </div>
          <Image
            className="hidden md:flex"
            src={"/images/illustration-footer.png"}
            alt="Logotipo do Juniando"
            width={200}
            height={200}
          />
          <form className="flex flex-col gap-3 w-full">
            <Input isTextarea placeholder="Deixe sua mensagem" rows={5} />
            <div className="flex gap-3 w-full">
              <Input placeholder="Digite seu e-mail" />
              <button className="bg-yellow-500 w-11 h-10 rounded-lg flex items-center justify-center">
                <ArrowRight className=" fill-white" />
              </button>
            </div>
          </form>
        </div>
        <p className="text-center pb-2 pt-8 md:pt-4 opacity-70 text-white">
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
