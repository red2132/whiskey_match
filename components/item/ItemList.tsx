import type { WhiskeyOverview } from "@/types";
import WhiskeyItem from "./Item";

export default function WhiskeyItemList({
  whiskies,
}: {
  whiskies: WhiskeyOverview[] | null;
}): JSX.Element {
  return (
    <div className="w-fit grid lg:grid-cols-4 md:grid-cols-3 gap-16 mx-auto justify-center">
      {whiskies?.map((whiskey) => (
        <WhiskeyItem
          key={whiskey.whiskeyId}
          whiskeyId={whiskey.whiskeyId}
          whiskeyName={whiskey.whiskeyName}
          whiskeyThumbnailImage={whiskey.whiskeyThumbnailImage}
        />
      ))}
    </div>
  );
}
