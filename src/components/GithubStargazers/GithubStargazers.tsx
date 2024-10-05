import React, { useEffect, useState } from "react";
import { FaGithub, FaStar } from "react-icons/fa";
import { Stargazer } from "./types";



const GithubStargazers: React.FC = () => {
  const [stargazers, setStargazers] = useState<Stargazer[]>([]);

  useEffect(() => {
    fetch(`https://api.github.com/repos/gomestzx/tools4CSS/stargazers`)
      .then((response) => response.json())
      .then((data: Stargazer[]) => setStargazers(data))
      .catch((error) => console.error("Error fetching stargazers:", error));
  }, []);

  return (
    <div className="mt-10">
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
        <button className="bg-black text-white px-8 py-2 rounded-xl flex items-center justify-center gap-2">
          <FaGithub />
          <FaStar color="#FABC3F" />
          <span className="font-lexend">{stargazers.length}</span>
        </button>
      </div>
      <p className="font-lexend text-gray-600 text-center mt-2">
        Add a star on GitHub and join the community!
      </p>
    </div>
  );
};

export default GithubStargazers;
