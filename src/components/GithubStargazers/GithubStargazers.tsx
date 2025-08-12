import React, { useEffect, useState } from "react";
import { FaGithub, FaStar } from "react-icons/fa";
import Link from "next/link";

type User = {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
};

const GithubStargazers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [starsCount, setStarsCount] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const repoRes = await fetch("https://api.github.com/repos/ofenascimento/tools4CSS", {
          headers: { Accept: "application/vnd.github+json" },
        });
        const repo = await repoRes.json();
        setStarsCount(repo?.stargazers_count ?? 0);
        const stargazersRes = await fetch(
          "https://api.github.com/repos/ofenascimento/tools4CSS/stargazers?per_page=100",
          { headers: { Accept: "application/vnd.github+json" } }
        );
        const data = await stargazersRes.json();
        setUsers(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-10 w-full md:w-5/6 lg:w-4/6 mx-auto">
      <div className="flex items-center justify-center flex-wrap gap-2">
        {users.map((u) => (
          <a key={u.id} href={u.html_url} target="_blank" rel="noopener noreferrer">
            <img src={u.avatar_url} alt={u.login} className="w-10 h-10 rounded-full" />
          </a>
        ))}
      </div>

      <div className="flex items-center justify-center mt-4">
        <Link href="https://github.com/ofenascimento/tools4CSS">
          <div className="bg-black text-white px-8 py-2 rounded-xl flex items-center gap-2 dark:border dark:border-slate-600 cursor-pointer">
            <FaGithub />
            <FaStar color="#FABC3F" />
            <span className="font-lexend">{starsCount}</span>
          </div>
        </Link>
      </div>

      <p className="font-lexend text-gray-600 dark:text-gray-300 text-center mt-2">
        Add a star on GitHub and join the community!
      </p>
    </div>
  );
};

export default GithubStargazers;
