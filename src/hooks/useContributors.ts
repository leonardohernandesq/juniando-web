import { useCallback, useEffect, useState } from "react";

interface IContributors {
  login: string;
  html_url: string;
  avatar_url: string;
}

const useContributors = (owner: string, repo: string, limit = 5) => {
  const [contributors, setContributors] = useState<IContributors[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContributors = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contributors`
      );
      if (!response.ok) throw new Error("Erro ao buscar contribuidores");

      const data = await response.json();
      setContributors(data.slice(0, limit));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, [owner, repo, limit]);

  useEffect(() => {
    fetchContributors();
  }, [fetchContributors]);

  return { contributors, loading, error };
};

export default useContributors;
