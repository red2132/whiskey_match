"use client";

import { ChangeEvent, useEffect } from "react";
import StarRating from "./StarRating";

function StarInputEdit({
  id,
  ratingName,
  ratingscore,
  setRatingScore,
}: {
  id: number;
  ratingName: string;
  ratingscore: number;
  setRatingScore: (value: number) => void;
}) {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setRatingScore(parseFloat(e.target.value));
  };

  useEffect(() => {
    if (ratingscore) {
      setRatingScore(ratingscore);
    }
  }, []);

  return (
    <div className="w-full h-10 md:h-20 bg-white rounded-3xl shadow flex flex-row items-center">
      <div className="w-2/5 h-full bg-gradient-to-b to-gray-100 from-gray-100 via-white shadow ml-5 flex items-center justify-center">
        <p className="text-sm md:text-2xl font-semibold">{ratingName}</p>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="relative w-fit">
          <StarRating rating={ratingscore} id={id} editColor />
          <div className="absolute inset-0 w-full opacity-0">
            <input
              type="range"
              onChange={onChange}
              onClick={(e) => e.stopPropagation()}
              value={ratingscore}
              min="0"
              max="5"
              step="0.5"
              className="w-full h-full" // 별 크기 맞춤
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StarInputEdit;
