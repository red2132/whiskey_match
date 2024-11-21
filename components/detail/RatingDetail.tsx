import GetRatingDetail from "./GetRatingDetail";

export default async function RatingDetail({
  whiskeyId,
}: {
  whiskeyId: string;
}): Promise<JSX.Element> {
  return <GetRatingDetail whiskeyId={whiskeyId} />;
}
