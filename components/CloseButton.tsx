"use client";

import { useRouter } from "next/navigation";

export default function CloseButton() {
  const router = useRouter();
  return (
    <button
      className="absolute right-2 top-2 h-8 w-8 rounded-full bg-black text-white hover:text-gray-600 opacity-75 z-10"
      onClick={() => {
        router.back();
      }}
    >
      <i className="fas fa-x"></i>
    </button>
  );
}
