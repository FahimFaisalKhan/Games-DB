import React from "react";
import { useLoaderData } from "react-router-dom";
import GameCard from "../components/Cards/GameCard";

const Home = () => {
  const data = useLoaderData();
  const games = data.data.results;
  return (
    <div className="container mx-auto">
      {games.map((game) => (
        <GameCard game={game}></GameCard>
      ))}
    </div>
  );
};

export default Home;
