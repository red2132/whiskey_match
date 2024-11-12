import RatingDetail from "@/components/detail/RatingDetail";
import WhiskeyDetail from "@/components/detail/WhiskeyDetail";
import Link from "next/link";

export default function Modal() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="relative lg:w-1/2 md:w-11/12 h-fit bg-[#fbfbfb] flex flex-col gap-7 justify-center items-center ">
        <button className="absolute right-4 top-4 h-8 w-8 rounded-full bg-black text-white hover:text-gray-600 opacity-75 z-10">
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
