import Image from "next/image";

export default function About() {
  return (
    <main>
      <section className="bg-banner-about bg-no-repeat bg-cover bg-center">
        <div className="max-w-5xl m-auto flex flex-col px-5 pt-72 pb-36 text-white gap-3">
          <h1 className="font-bold text-5xl w-full sm:w-80">
            Nosso foco é transformar vidas!
          </h1>
          <p className="text-xl w-full md:w-1/2 pr-10">
            Ajudamos você Desenvolvedor Jr a conseguir sua primeira vaga no
            mercado de trabalho, com dicas e anúncios de vagas para você
            alavangar a sua carreira.
          </p>
        </div>
      </section>
      <section className="py-20 max-w-5xl m-auto flex flex-col-reverse md:flex-row px-5 items-center gap-11">
        <div>
          <h2 className="text-3xl font-bold mb-7 text-dark-100">Quem somos?</h2>
          <p className="text-xl text-dark-100">
            Somos uma equipe de desenvolvedores que se uniram com o propósito de
            alavancar a carreira daqueles que estão iniciando na área de
            programação, e se sentem meio perdidos sobre por onde começar a
            estudar e onde encontrar vagas para o primeiro emprego. Sabemos o
            quanto o começo dessa caminhada é difícil, e nos unimos com o
            objetivo de facilitar a sua jornada como desenvolvedor. Vamos
            avançar juntos?
          </p>
        </div>

        <Image
          className="rounded-3xl shadow-md"
          src={"/images/about-us-2.jpg"}
          alt="Desenvolvedor sorridente, de óculos e camisa xadrez, digitando em um laptop."
          width={436}
          height={476}
        />
      </section>
    </main>
  );
}
