import React from "react";

const GameRating = ({ value }) => {
  return (
    <div>
      {value >= 1 ? (
        <i class="fa-solid fa-star text-3xl text-amber-300 mr-3"></i>
      ) : value >= 0.5 ? (
        <i class="fa-solid fa-star-half-stroke text-3xl mr-3 text-amber-300"></i>
      ) : (
        <i class="fa-regular fa-star text-3xl mr-3 text-amber-300"></i>
      )}
      {value >= 2 ? (
        <i class="fa-solid fa-star text-3xl mr-3 text-amber-300"></i>
      ) : value >= 1.5 ? (
        <i class="fa-solid fa-star-half-stroke text-3xl mr-3 text-amber-300"></i>
      ) : (
        <i class="fa-regular fa-star text-3xl mr-3 text-amber-300"></i>
      )}
      {value >= 3 ? (
        <i class="fa-solid fa-star text-3xl mr-3 text-amber-300"></i>
      ) : value >= 2.5 ? (
        <i class="fa-solid fa-star-half-stroke text-3xl mr-3 text-amber-300"></i>
      ) : (
        <i class="fa-regular fa-star text-3xl mr-3 text-amber-300"></i>
      )}
      {value >= 4 ? (
        <i class="fa-solid fa-star text-3xl mr-3 text-amber-300"></i>
      ) : value >= 3.5 ? (
        <i class="fa-solid fa-star-half-stroke text-3xl mr-3 text-amber-300"></i>
      ) : (
        <i class="fa-regular fa-star text-3xl mr-3 text-amber-300"></i>
      )}
      {value >= 5 ? (
        <i class="fa-solid fa-star text-3xl mr-3 text-amber-300"></i>
      ) : value >= 4.5 ? (
        <i class="fa-solid fa-star-half-stroke text-3xl mr-3 text-amber-300"></i>
      ) : (
        <i class="fa-regular fa-star text-3xl mr-3 text-amber-300"></i>
      )}
    </div>
  );
};

export default GameRating;
