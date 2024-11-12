import DefaultButton from "../DefaultButton";
import StarInput from "../star/StarInput";

export default function RatingDetail() {
  return (
    <div className="flex flex-col gap-1 md:gap-3 relative w-3/4">
      <h1 className="main-text">위스키 궁합 점수</h1>
      <div className="flex justify-end pb-5 text-sm md:text-xl">
        <p>리뷰 10개</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 md:gap-3">
        <StarInput id={111} />
        <StarInput id={222} />
        <StarInput id={333} />
        <StarInput id={444} />
        <StarInput id={555} />
      </div>
      <div className="w-full flex justify-end py-5">
        <DefaultButton>점수 입력</DefaultButton>
      </div>
    </div>
  );
}
