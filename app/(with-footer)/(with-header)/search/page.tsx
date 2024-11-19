"use client";
import { getWhiskeyByName } from "@/actions/whiskey-actions";
import WhiskeyItemList from "@/components/item/ItemList";
import { useQuery } from "@tanstack/react-query";

function SearchWhiskies({ query }: { query: string }): JSX.Element {
  const { data: searchWhiskies = [], isLoading } = useQuery({
    queryKey: ["whiskey", query],
    queryFn: () => getWhiskeyByName(query),
  });

  if (isLoading) {
    return <h1 className="main-text m-10">로딩중...</h1>;
  }

  return (
    <div>
      <h1 className="main-text m-10">
        '{query}' 검색 결과 {searchWhiskies?.length}건
      </h1>
      <WhiskeyItemList whiskies={searchWhiskies} />
    </div>
  );
}

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}): JSX.Element {
  const { q } = searchParams;

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <section className="mt-10 flex flex-col gap-6 ">
          <SearchWhiskies query={q} />
        </section>
      </div>
    </div>
  );
}
