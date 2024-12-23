import ArrowRight from "@/components/icons/arrow-right";
import Link from "next/link";

export interface Topic {
  name: string;
  link: string;
  qtd: number;
}

interface IRelevantTopics {
  items?: Topic[];
}

// MOCK
const MOCKED_EXAMPLE_DATA = [
  {
    name: "Javascript",
    link: "/",
    qtd: 2,
  },
  {
    name: "ReactJs",
    link: "/",
    qtd: 3,
  },
  {
    name: "VueJS",
    link: "/",
    qtd: 4,
  },
  {
    name: "AngularJS",
    link: "/",
    qtd: 5,
  },
];

const RelevantTopics = ({ items = MOCKED_EXAMPLE_DATA }: IRelevantTopics) => {
  return (
    <div className="bg-light rounded-xl drop-shadow-principal sm:max-w-72">
      <div className="flex flex-col items-center justify-center gap-4 px-5 py-6">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold text-dark-100">
            Assuntos Relevantes
          </h1>
          <div className="w-1/2 h-0.5 bg-principal mt-2 rounded-lg" />
        </div>
        <div className="flex flex-col w-full">
          {items.map(({ link, name, qtd }) => (
            <Link
              href={link}
              key={name}
              className="w-full flex items-center gap-2 border-b border-light-gray-200 group cursor-pointer py-2 transition-colors duration-500 ease-out"
            >
              <ArrowRight className="fill-principal size-4" />
              <span className="flex-1 font-medium text-dark-100 group-hover:text-principal/80">
                {name}
              </span>
              <span className="font-medium text-dark-100 group-hover:text-principal/80">
                ({qtd})
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelevantTopics;
