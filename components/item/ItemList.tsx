import { WhiskeyRow } from "@/actions/whiskey-actions";
import WhiskeyItem from "./Item";

export default function WhiskeyItemList({
  whiskies,
}: {
  whiskies: WhiskeyRow[] | null;
}): JSX.Element {
  return (
    <div className="w-fit grid lg:grid-cols-4 md:grid-cols-3 gap-16 mx-auto justify-center">
      {whiskies?.map((whiskey) => (
        <WhiskeyItem
          key={whiskey.whiskey_id}
          whiskeyId={whiskey.whiskey_id}
          whiskeyName={whiskey.whiskey_name}
          whiskeyThumbnailImage={whiskey.whiskey_thumbnail_image}
        />
      ))}
    </div>
  );
}
