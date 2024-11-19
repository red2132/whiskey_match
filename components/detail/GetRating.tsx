"use client";

import { useQuery } from "@tanstack/react-query";
import DefaultButton from "../DefaultButton";
import StarInput from "../star/StarInput";
import {
  getAverageRatingsByWhiskeyId,
  IsMemberRating,
} from "@/actions/rating-actions";

export default function GetRating({
  whiskeyId,
}: {
  whiskeyId: string;
}): JSX.Element {
  const { data: ratingInfo, isLoading } = useQuery({
    queryKey: ["rating"],
    queryFn: () => getAverageRatingsByWhiskeyId(whiskeyId),
  });

  const { data: isRating } = useQuery({
    queryKey: ["isRating"],
    queryFn: () => IsMemberRating(whiskeyId, "happy1234"),
  });

  const avgRating = ratingInfo?.avgRating;
  const ratingCount = ratingInfo?.ratingCount;

  if (isLoading) {
    return <h1 className="main-text m-10">로딩중...</h1>;
  }
  return (
    <div className="flex flex-col gap-1 md:gap-3 relative w-3/4">
      <h1 className="main-text">위스키 궁합 점수</h1>
      <div className="flex justify-end pb-5 text-sm md:text-xl">
        <p>리뷰 {ratingCount}개</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 md:gap-3">
        <StarInput
          id={111}
          ratingName="고기"
          ratingscore={avgRating?.rating_meat}
        />
        <StarInput
          id={222}
          ratingName="회"
          ratingscore={avgRating?.rating_sasimi}
        />
        <StarInput
          id={333}
          ratingName="치즈"
          ratingscore={avgRating?.rating_cheeze}
        />
        <StarInput
          id={444}
          ratingName="초콜릿"
          ratingscore={avgRating?.rating_chocolate}
        />
        <StarInput
          id={555}
          ratingName="마른 안주"
          ratingscore={avgRating?.rating_dried_snack}
        />
      </div>
      <div className="w-full flex justify-end py-5">
        <DefaultButton>{isRating ? "점수 수정" : "점수 입력"}</DefaultButton>
      </div>
    </div>
  );
}
