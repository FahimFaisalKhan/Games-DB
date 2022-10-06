import React from "react";
import { Hero, Button } from "react-daisyui";

import GameRating from "../GameRating/GameRating";
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  const { background_image, name, rating, id } = game;
  return (
    <Link to={`/detail/${id}`} className="cursor-default">
      <Hero
        style={{
          backgroundImage: `url(${background_image})`,
          backgroundPosition: "top",
          height: "25rem",
        }}
        className="mb-16 rounded-3xl"
      >
        <Hero.Overlay className="rounded-3xl" />
        <Hero.Content className="text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mb-5">{name}</h1>
            <GameRating value={rating}></GameRating>
            <Link to={`/detail/${id}`}>
              <Button color="primary mt-5">See Details</Button>
            </Link>
          </div>
        </Hero.Content>
      </Hero>
    </Link>
  );
};

export default GameCard;
