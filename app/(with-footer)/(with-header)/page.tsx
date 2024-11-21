"use client";
import { getRecoWhiskies } from "@/actions/whiskey-actions";
import WhiskeyItemList from "@/components/item/ItemList";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function Home(): JSX.Element {
  function RecoWhiskies(): JSX.Element {
    const {
      data: recoWhiskies = [],
      isLoading,
      isError,
    } = useQuery({
      queryKey: ["recoWhiskies"],
      queryFn: () => getRecoWhiskies(),
    });

    if (isLoading) return <h1 className="main-text">로딩중...</h1>;
    if (isError) return <h1 className="main-text">오류가 발생했습니다.</h1>;

    return recoWhiskies.length > 0 ? (
      <>
        <h1 className="main-text">오늘의 추천 위스키</h1>
        <WhiskeyItemList whiskies={recoWhiskies} />
      </>
    ) : (
      <p>추천할 위스키가 없습니다</p>
    );
  }
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
          <RecoWhiskies />
          <div className="w-fit"></div>
        </section>
      </div>
    </div>
  );
}
