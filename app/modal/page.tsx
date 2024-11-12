import RatingDetail from "@/components/detail/RatingDetail";
import WhiskeyDetail from "@/components/detail/WhiskeyDetail";
import Link from "next/link";

export default function Modal() {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-11/12 lg:w-2/5 bg-[#fbfbfb] flex flex-col gap-7 justify-center items-center ">
        <button className="absolute right-2 top-2 h-8 w-8 rounded-full bg-black text-white hover:text-gray-600 opacity-75 z-10">
          <Link href={"/"}>
            <i className="fas fa-x"></i>
          </Link>
        </button>

        <WhiskeyDetail />
        <RatingDetail />
      </div>
    </div>
  );
}
