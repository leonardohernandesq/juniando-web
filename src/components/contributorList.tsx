"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface IFork {
  owner: {
    login: string;
    html_url: string;
    avatar_url: string;
  };
}

interface ForksListProps {
  priorityContribuitors?: string[];
}

const ForksList = ({ priorityContribuitors }: ForksListProps) => {
  const owner = "ilucaslima";
  const repo = "juniando-web";
  const limit = 5;

  const [forks, setForks] = useState<IFork[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchForks = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/forks`
        );
        if (!response.ok) throw new Error("Erro ao buscar forks");

        const data: IFork[] = await response.json();

        let priorityForks: IFork[] = [];
        let otherForks: IFork[] = data;

        // Adicionar manualmente o dono do repositório como o primeiro
        const ownerFork: IFork = {
          owner: {
            login: owner,
            html_url: `https://github.com/${owner}`,
            avatar_url: `https://github.com/${owner}.png`,
          },
        };
        priorityForks.push(ownerFork);

        if (priorityContribuitors && priorityContribuitors.length > 0) {
          const priorityUserForks = otherForks.filter((fork) =>
            priorityContribuitors.includes(fork.owner.login)
          );
          priorityForks = [...priorityForks, ...priorityUserForks];
          otherForks = otherForks.filter(
            (fork) => !priorityContribuitors.includes(fork.owner.login)
          );
        }

        // Selecionar aleatoriamente os forks restantes até atingir o limite
        while (priorityForks.length < limit && otherForks.length > 0) {
          const randomIndex = Math.floor(Math.random() * otherForks.length);
          priorityForks.push(otherForks.splice(randomIndex, 1)[0]);
        }

        setForks(priorityForks.slice(0, limit));
      } catch (err) {
        console.log((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchForks();
  }, []);

  return (
    <div className="mt-4 flex -space-x-2 overflow-hidden">
      {forks.map((fork) => (
        <a
          key={fork.owner.login}
          href={fork.owner.html_url}
          title={fork.owner.login}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="inline-block size-12 rounded-full border-2 border-white shadow-2xl"
            src={fork.owner.avatar_url}
            alt={fork.owner.login}
            width={50}
          />
        </a>
      ))}
    </div>
  );
};

export default ForksList;
