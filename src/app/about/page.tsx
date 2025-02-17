import Image from "next/image";
import MissionBox from "@/components/mission-box";

const About = () => {
  return (
    <main>
      <section className="bg-banner-about bg-no-repeat bg-cover bg-center">
        <div className="max-w-5xl m-auto flex flex-col px-5 lg:px-0 pt-72 pb-36 text-white gap-5">
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
      <section className="pt-20 pb-10 max-w-5xl m-auto flex flex-col-reverse px-5 md:flex-row lg:px-0 items-center gap-11">
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
      <section className="pb-20 max-w-5xl m-auto flex flex-col md:flex-row px-5 lg:px-0 gap-5">
        <MissionBox
          icon="mission.png"
          alt="Icone de uma flecha e de um alvo referindo a missão"
          title="Missão"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem maiores architecto modi
            neque illum impedit cupiditate illo sapiente quaerat atque repellat deleniti laudantium,
            consequuntur."
        />
        <MissionBox
          icon="vision.png"
          alt="Icone de uma flecha e de um alvo referindo a missão"
          title="Visão"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem maiores architecto modi
            neque illum impedit cupiditate illo sapiente quaerat atque repellat deleniti laudantium,
            consequuntur."
        />
        <MissionBox
          icon="value.png"
          alt="Icone de uma flecha e de um alvo referindo a missão"
          title="Valores"
          description="
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem maiores architecto modi
            neque illum impedit cupiditate illo sapiente quaerat atque repellat deleniti laudantium,
            consequuntur."
        />
      </section>
    </main>
  );
};

export default About;
