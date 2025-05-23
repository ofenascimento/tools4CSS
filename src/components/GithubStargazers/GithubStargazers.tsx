import React, { useEffect, useState } from "react";
import { FaGithub, FaStar } from "react-icons/fa";
import { Stargazer } from "./types";
import Link from "next/link";

const GithubStargazers: React.FC = () => {
  const [stargazers, setStargazers] = useState<Stargazer[]>([]);

  useEffect(() => {

    const fetchStargazes = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/ofenascimento/tools4CSS/stargazers?per_page=100')
        const data = await response.json();
        setStargazers(data)
      }
      catch (err) {
        console.log(err)
      }
    }

    fetchStargazes()

  }, [])

  return (
    <div className="mt-10 w-full md:w-5/6 lg:w-4/6 mx-auto">
      <div className="flex items-center justify-center flex-wrap gap-2">
        {stargazers.map((user) => (
          <a
            key={user.id}
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-10 h-10 rounded-full"
            />
          </a>
        ))}
      </div>

      <div className="flex items-center justify-center mt-4">
        <Link href="https://github.com/ofenascimento/tools4CSS">
          <div className="bg-black text-white px-8 py-2 rounded-xl flex items-center justify-center gap-2 dark:border dark:border-slate-600 cursor-pointer">
            <FaGithub />
            <FaStar color="#FABC3F" />
            <span className="font-lexend">{stargazers.length}</span>
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
