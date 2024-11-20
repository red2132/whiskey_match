"use client";

import { useMutation } from "@tanstack/react-query";
import DefaultButton from "../DefaultButton";
import { updateRating } from "@/actions/rating-actions";
import useRatingStore from "@/store/useRatingStore";
import StarInputEdit from "../star/StarInputEdit";
import { useEffect } from "react";
import useIsEditingStore from "@/store/useIsEditingStore";
import { memberRating } from "@/types";

export default function UpdateRating({
  isRating,
}: {
  isRating: memberRating;
}): JSX.Element {
  // 별점 점수 변수 세팅
  const {
    ratingMeat,
    ratingSasimi,
    ratingCheeze,
    ratingChocolate,
    ratingDriedSnack,
    setRatingMeat,
    setRatingSasimi,
    setRatingCheeze,
    setRatingChocolate,
    setRatingDriedSnack,
  } = useRatingStore();

  const undateRatingMutation = useMutation({
    mutationFn: () =>
      updateRating({
        rating_id: Number(isRating.rating_id),
        rating_meat: ratingMeat,
        rating_sasimi: ratingSasimi,
        rating_cheeze: ratingCheeze,
        rating_chocolate: ratingChocolate,
        rating_dried_snack: ratingDriedSnack,
      }),
    onSuccess: () => {
      setRatingMeat(0);
      setRatingSasimi(0);
      setRatingCheeze(0);
      setRatingChocolate(0);
      setRatingDriedSnack(0);
      setIsEditing(false);
    },
  });
  // 화면 전환용 토글 함수
  const { setIsEditing, toggle } = useIsEditingStore();

  useEffect(() => {
    // rating이 있을 경우 점수 사전 세팅
    setRatingMeat(isRating.rating_meat);
    setRatingSasimi(isRating.rating_sasimi);
    setRatingCheeze(isRating.rating_cheeze);
    setRatingChocolate(isRating.rating_chocolate);
    setRatingDriedSnack(isRating.rating_dried_snack);
    // 컴포넌트가 언마운트될 때 점수 초기화
    return () => {
      setRatingMeat(0);
      setRatingSasimi(0);
      setRatingCheeze(0);
      setRatingChocolate(0);
      setRatingDriedSnack(0);
    };
  }, []);

  return (
    <div className="flex flex-col gap-1 md:gap-3 relative w-3/4">
      <h1 className="main-text">내 위스키 궁합 점수</h1>
      <div className="flex flex-col justify-center items-center gap-2 md:gap-3">
        <StarInputEdit
          id={ratingMeat}
          ratingName="고기"
          ratingscore={ratingMeat}
          setRatingScore={setRatingMeat}
        />
        <StarInputEdit
          id={ratingSasimi}
          ratingName="회"
          ratingscore={ratingSasimi}
          setRatingScore={setRatingSasimi}
        />
        <StarInputEdit
          id={ratingCheeze}
          ratingName="치즈"
          ratingscore={ratingCheeze}
          setRatingScore={setRatingCheeze}
        />
        <StarInputEdit
          id={ratingChocolate}
          ratingName="초콜릿"
          ratingscore={ratingChocolate}
          setRatingScore={setRatingChocolate}
        />
        <StarInputEdit
          id={ratingDriedSnack}
          ratingName="마른 안주"
          ratingscore={ratingDriedSnack}
          setRatingScore={setRatingDriedSnack}
        />
      </div>
      <div className="w-full flex justify-end py-5 gap-2">
        <DefaultButton
          onClick={() => {
            undateRatingMutation.mutate();
          }}
        >
          수정하기
        </DefaultButton>
        <DefaultButton className="delete-button-sm" onClick={toggle}>
          뒤로
        </DefaultButton>
      </div>
    </div>
  );
}
