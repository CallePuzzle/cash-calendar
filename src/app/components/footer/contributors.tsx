"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

interface Contributor {
  html_url: string;
  id: number;
  avatar_url: string;
  login: string;
}

function Contributors() {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    async function fetchContributors() {
      const res = await fetch(
        "https://api.github.com/repos/callepuzzle/cash-calendar/contributors"
      );
      const data = await res.json();
      console.log("data: ", data);
      setContributors(data);
    }
    fetchContributors();
  }, []);

  if (!Array.isArray(contributors)) return <div>Loading...</div>;

  return (
    <>
      <p>Contribuidores</p>
      <ul>
        {contributors.map((contributor: Contributor) => (
          <li key={contributor.id}>
            <Link
              href={contributor.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={contributor.avatar_url}
                alt={contributor.login}
                className="w-10 rounded-full"
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.github.com/repos/callepuzzle/cash-calendar/contributors"
  );
  const contributors = await res.json();

  return {
    props: {
      contributors,
    },
  };
}

export default Contributors;
