import type { WhiskeyInfo } from "@/types";
import Image from "next/image";

export default async function WhiskeyDetail({
  whiskeyId,
}: {
  whiskeyId: string;
}): Promise<JSX.Element> {
  // api 호출
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/dummy/dummyWhiskeyList.json`,
    {
      cache: "no-store", // 캐시 비활성화
    }
  );

  // 예외처리
  if (!response.ok) {
    return <div>오류가 발생했습니다! 새로고침해 주세요!</div>;
  }

  // 데이터 세팅 및 위스키 리스트 리턴
  const whiskeyData: WhiskeyInfo[] = await response.json();
  const whiskeyInfo = await whiskeyData.find(
    (whiskey) => whiskey.whiskeyId === whiskeyId
  );

  if (!whiskeyInfo) {
    return <div>데이터가 없습니다!</div>;
  }
  return (
    <div className="w-full relative">
      <Image
        className="w-full h-72 md:h-[640px] brightness-50 object-fill"
        src={whiskeyInfo.whiskeyBgImage}
        alt="위스키 배경 이미지"
        height={640}
        width={720}
      />
      <Image
        className="rounded-md w-[40%] h-[45%] absolute right-[7%] bottom-[10%] object-fill"
        src={whiskeyInfo.whiskeyThumbnailImage}
        alt="위스키 썸네일 이미지"
        height={250}
        width={250}
      />
      <div className="text-[#ffffff] text-xl md:text-4xl font-semibold absolute left-[5%] top-[14%] w-[90%] break-words">
        <h1>{whiskeyInfo.whiskeyName}</h1>
      </div>
      <div className="text-[#ffffff] text-left text-sm md:text-2xl absolute left-[5%] top-[37%] flex flex-col justify-start w-[45%]">
        <p>종류: {whiskeyInfo.whiskeyType}</p>
        <p>용량: {whiskeyInfo.whiskeyVolume}</p>
        <p>도수: {whiskeyInfo.whiskeyAbv}</p>
        <p>국가: {whiskeyInfo.whiskeyNation}</p>
      </div>
      <div className="text-[#ffffff] text-left text-[11px] md:text-2xl absolute left-[5%] top-[70%] flex flex-col justify-start w-[45%] break-words">
        <p className="line-clamp-2">Aroma: {whiskeyInfo.whiskeyAroma}</p>
        <p className="line-clamp-2">taste: {whiskeyInfo.whiskeyTaste}</p>
        <p className="line-clamp-2">Finish: {whiskeyInfo.whiskeyFinish}</p>
      </div>
    </div>
  );
}
