import WhiskeyItemList from "@/components/item/ItemList";
import type { WhiskeyOverview } from "@/types";
import Image from "next/image";

async function GetRecoWhiskies(): Promise<JSX.Element> {
  // api 호출
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/dummy/dummyWhiskeyOverviewList.json`,
    {
      cache: "no-store", // 캐시 비활성화
    }
  );

  // 예외처리
  if (!response.ok) {
    return <div>오류가 발생했습니다! 새로고침해 주세요!</div>;
  }

  // 데이터 세팅 및 위스키 리스트 리턴
  const recoWhiskies: WhiskeyOverview[] | null = await response.json();
  return <WhiskeyItemList whiskies={recoWhiskies} />;
}
export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full">
        <Image
          src="/images/whiskey_main_image.png"
          alt="위스키 매치 메인 이미지"
          width={1440}
          height={418}
          className="!w-full !h-auto"
        />
      </div>
      <div className="flex flex-col items-center">
        <section className="mt-10 flex flex-col gap-6 ">
          <h1 className="main-text">오늘의 추천 위스키</h1>
          <GetRecoWhiskies />
          <div className="w-fit"></div>
        </section>
      </div>
    </div>
  );
}
