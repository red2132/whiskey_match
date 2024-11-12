"use client";

import RatingDetail from "@/components/detail/RatingDetail";
import WhiskeyDetail from "@/components/detail/WhiskeyDetail";
import { useState } from "react";

export default function Modal() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="relative lg:w-1/2 md:w-11/12 h-fit bg-[#fbfbfb] flex flex-col gap-7 justify-center items-center ">
        {/* 닫기 버튼 */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 h-8 w-8 rounded-full bg-black text-white hover:text-gray-600 opacity-75 z-10"
        >
          <i className="fas fa-x"></i>
        </button>

        <WhiskeyDetail />
        <RatingDetail />
      </div>
    </div>
  );
}
