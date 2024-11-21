import WhiskeyDetailPage from "@/app/whiskeyDetail/[whiskeyId]/page";
import WhiskeyModal from "@/components/whiskeyModal";

export default function Page(props: any) {
  return (
    <WhiskeyModal>
      <WhiskeyDetailPage {...props} />
    </WhiskeyModal>
  );
}
