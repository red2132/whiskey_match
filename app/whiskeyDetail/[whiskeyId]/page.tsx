import RatingDetail from "@/components/detail/RatingDetail";
import WhiskeyDetail from "@/components/detail/WhiskeyDetail";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ whiskeyId: string }>;
}): Promise<JSX.Element> {
  const { whiskeyId } = await params;
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-80 md:w-[720px] bg-[#fbfbfb] flex flex-col gap-7 justify-center items-center ">
        <button className="absolute right-2 top-2 h-8 w-8 rounded-full bg-black text-white hover:text-gray-600 opacity-75 z-10">
          <Link href={"/"}>
            <i className="fas fa-x"></i>
          </Link>
        </button>

        <WhiskeyDetail whiskeyId={whiskeyId} />
        <RatingDetail whiskeyId={whiskeyId} />
      </div>
    </div>
  );
}
