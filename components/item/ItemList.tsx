import WhiskeyItem from "./Item";
import dummyWhiskeyList from "@/dummy/dummyWhiskeyList.json";

export default function WhiskeyItemList(): JSX.Element {
  return (
    <div className="w-fit grid lg:grid-cols-4 md:grid-cols-3 gap-16 mx-auto justify-center">
      {dummyWhiskeyList.map((whiskeyInfo) => (
        <>
          <WhiskeyItem
            key={whiskeyInfo.whiskey_id}
            whiskeyName={whiskeyInfo.whiskey_name}
            whiskeyThumbnailImage={whiskeyInfo.whiskey_thumbnail_image}
          />
        </>
      ))}
    </div>
  );
}
