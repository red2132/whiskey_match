import WhiskeyItemList from "@/components/item/ItemList";
import { WhiskeyOverview } from "@/types";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}): Promise<JSX.Element> {
  const { q } = await searchParams;

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
  const allWhiskies: WhiskeyOverview[] = await response.json();

  const filteredWhiskies = allWhiskies.filter((whiskey) =>
    whiskey.whiskeyName.toLowerCase().includes(q.toLowerCase())
  );
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <section className="mt-10 flex flex-col gap-6 ">
          <h1 className="main-text">
            '{q}' 검색 결과 {filteredWhiskies.length}건
          </h1>
          <div className="w-fit">
            <WhiskeyItemList whiskies={filteredWhiskies} />
          </div>
        </section>
      </div>
    </div>
  );
}
