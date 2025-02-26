"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface IFork {
  owner: {
    login: string;
    html_url: string;
    avatar_url: string;
  };
}

interface IForksListProps {
  priorityContribuitors?: string[];
}

const ForksList = ({ priorityContribuitors }: IForksListProps) => {
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
    <div className="mt-2 flex -space-x-2 overflow-hidden items-center">
      <p className="mr-3 text-sm">Contribuidores: </p>
      {forks.map((fork) => (
        <Link
          key={fork.owner.login}
          href={fork.owner.html_url}
          title={fork.owner.login}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="inline-block size-6 rounded-full border-2 border-principal shadow-2xl"
            src={fork.owner.avatar_url}
            alt={fork.owner.login}
            width={30}
            height={30}
          />
        </Link>
      ))}
    </div>
  );
};

export default ForksList;
