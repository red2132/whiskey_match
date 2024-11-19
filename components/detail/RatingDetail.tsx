import GetRating from "./GetRating";

export default async function RatingDetail({
  whiskeyId,
}: {
  whiskeyId: string;
}): Promise<JSX.Element> {
  return <GetRating whiskeyId={whiskeyId} />;
}
