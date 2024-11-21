"use client";
import { getWhiskeyById } from "@/actions/whiskey-actions";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function GetWhiskeyDetail({
  whiskeyId,
}: {
  whiskeyId: string;
}): JSX.Element {
  const { data: whiskeyInfo, isLoading } = useQuery({
    queryKey: ["whiskeyDetail"],
    queryFn: () => getWhiskeyById(whiskeyId),
  });

  if (isLoading) {
    return <h1 className="main-text m-10">로딩중...</h1>;
  }

  return (
    <div className="w-full relative">
      <Image
        className="w-full h-72 md:h-[640px] brightness-50 object-fill"
        src={whiskeyInfo?.whiskey_bg_image || "/images/no_image.png"}
        alt="위스키 배경 이미지"
        height={640}
        width={720}
      />
      <Image
        className="rounded-md w-[40%] h-[45%] absolute right-[7%] bottom-[10%] object-fill"
        src={whiskeyInfo?.whiskey_thumbnail_image || "/images/no_image.png"}
        alt="위스키 썸네일 이미지"
        height={250}
        width={250}
      />
      <div className="text-[#ffffff] text-xl md:text-4xl font-semibold absolute left-[5%] top-[14%] w-[90%] break-words">
        <h1>{whiskeyInfo?.whiskey_name}</h1>
      </div>
      <div className="text-[#ffffff] text-left text-[12px] md:text-2xl absolute left-[5%] top-[37%] flex flex-col justify-start w-[45%]">
        <p>종류: {whiskeyInfo?.whiskey_type}</p>
        <p>용량: {whiskeyInfo?.whiskey_volume}</p>
        <p>도수: {whiskeyInfo?.whiskey_abv}</p>
        <p>국가: {whiskeyInfo?.whiskey_nation}</p>
        {whiskeyInfo?.whiskey_region && (
          <p>지역: {whiskeyInfo.whiskey_region}</p>
        )}
      </div>
      <div className="text-[#ffffff] text-left text-[9px] md:text-xl absolute left-[5%] top-[70%] flex flex-col justify-start w-[45%] break-keep">
        <p className="line-clamp-2">Aroma: {whiskeyInfo?.whiskey_aroma}</p>
        <p className="line-clamp-2">taste: {whiskeyInfo?.whiskey_taste}</p>
        <p className="line-clamp-2">Finish: {whiskeyInfo?.whiskey_finish}</p>
      </div>
    </div>
  );
}
