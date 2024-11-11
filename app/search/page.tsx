import Header from "@/components/Header";
import WhiskeyItemList from "@/components/item/ItemList";
export default function SearchPage(): JSX.Element {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <section className="mt-10 flex flex-col gap-6 ">
            <h1 className="main-text">'발베니' 검색 결과 12건</h1>
            <div className="w-fit">
              <WhiskeyItemList />
              <WhiskeyItemList />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
