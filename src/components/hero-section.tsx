import { PropsWithChildren } from "react";

interface HeroSectionProps extends PropsWithChildren {
  title: string;
}

const HeroSection = ({ title, children }: HeroSectionProps) => {
  return (
    <section className="flex flex-col items-start justify-start gap-10 p-4 w-full">
      <div className="flex flex-col items-center max-sm:justify-center max-sm:w-full">
        <h1 className="text-xl font-bold text-dark-100">{title}</h1>
        <div className="w-full max-sm:max-w-48 h-0.5 max-sm:h-1 bg-principal mt-2 rounded-lg" />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">{children}</div>
    </section>
  );
};

export default HeroSection;
