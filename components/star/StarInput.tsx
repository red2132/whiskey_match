"use client";

import { ChangeEvent, useState } from "react";
import StarRating from "./StarRating";

function StarInput({ id }: { id: number }) {
  const [rating, setRating] = useState<number>(0);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setRating(parseFloat(e.target.value));
  };

  return (
    <div className="w-full h-10 md:h-20 bg-white rounded-3xl shadow flex flex-row items-center">
      <div className="w-2/5 h-full bg-gradient-to-b to-gray-100 from-gray-100 via-white shadow ml-5 flex items-center justify-center">
        <p className="text-sm sm:text-xl font-semibold">마른 안주</p>
      </div>
      <div className="w-full flex justify-center">
        <div className="relative w-fit">
          <StarRating rating={rating ?? 0} id={id} />
          <div className="absolute inset-0 w-full opacity-0">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default StarInput;
