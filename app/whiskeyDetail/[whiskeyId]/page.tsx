import CloseButton from "@/components/CloseButton";
import RatingDetail from "@/components/detail/RatingDetail";
import WhiskeyDetail from "@/components/detail/WhiskeyDetail";

export default async function WhiskeyDetailPage({
  params,
}: {
  params: Promise<{ whiskeyId: string }>;
}): Promise<JSX.Element> {
  const { whiskeyId } = await params;
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-80 md:w-[720px] bg-[#fbfbfb] flex flex-col gap-7 justify-center items-center ">
        <CloseButton />
        <WhiskeyDetail whiskeyId={whiskeyId} />
        <RatingDetail whiskeyId={whiskeyId} />
      </div>
    </div>
  );
}
