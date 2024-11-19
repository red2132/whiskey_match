import GetWhiskeyDetail from "./GetWhiskeyDetail";

export default async function WhiskeyDetail({
  whiskeyId,
}: {
  whiskeyId: string;
}): Promise<JSX.Element> {
  return <GetWhiskeyDetail whiskeyId={whiskeyId} />;
}
