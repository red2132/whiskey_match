"use client";

import { ChangeEvent, useEffect, useState } from "react";
import StarRating from "./StarRating";

function StarInput({
  id,
  ratingName,
  isEditing,
  ratingscore,
}: {
  id: number;
  ratingName: string;
  isEditing?: boolean;
  ratingscore?: number;
}) {
  const [rating, setRating] = useState<number>(0);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setRating(parseFloat(e.target.value));
  };

  useEffect(() => {
    if (ratingscore) {
      setRating(ratingscore);
    }
  }, []);

  return (
    <div className="w-full h-10 md:h-20 bg-white rounded-3xl shadow flex flex-row items-center">
      <div className="w-20 h-11 md:w-32 md:h-[86px] border-none bg-gradient-to-b from-gray-100 via-white to-gray-200 shadow ml-5 flex items-center justify-center">
        <p className="text-sm md:text-2xl text-center border-none font-semibold">
          {ratingName}
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="relative w-fit">
          <StarRating rating={rating ?? 0} id={id} />
          <div className="absolute inset-0 w-full opacity-0">
            {isEditing && (
              <input
                type="range"
                onChange={onChange}
                onClick={(e) => e.stopPropagation()}
                value={rating ?? 0}
                min="0"
                max="5"
                step="0.5"
                className="w-full h-full" // 별 크기 맞춤
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StarInput;
