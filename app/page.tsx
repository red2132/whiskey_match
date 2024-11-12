import Header from "@/components/Header";
import WhiskeyItemList from "@/components/item/ItemList";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <Image
          src="/images/whiskey_main_image.png"
          alt="위스키 매치 메인 이미지"
          width={1440}
          height={435}
          className="!w-full"
        />
        <div className="flex flex-col items-center">
          <section className="mt-10 flex flex-col gap-6 ">
            <h1 className="main-text">오늘의 추천 위스키</h1>
            <div className="w-fit">
              <WhiskeyItemList />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
