import RatingDetail2 from "./RatingDetail2";

export default async function RatingDetail({
  whiskeyId,
}: {
  whiskeyId: string;
}): Promise<JSX.Element> {
  return <RatingDetail2 whiskeyId={whiskeyId} />;
}
