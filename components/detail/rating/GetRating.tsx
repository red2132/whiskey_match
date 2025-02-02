import { useMutation, useQuery } from "@tanstack/react-query";
import DefaultButton from "../../DefaultButton";
import StarInput from "../../star/StarInput";
import {
  deleteRating,
  getAverageRatingsByWhiskeyId,
} from "@/actions/rating-actions";
import useIsEditingStore from "@/store/useIsEditingStore";
import { useEffect, useState } from "react";
import { memberRating } from "@/types";
import useRatingStore from "@/store/useRatingStore";

export default function GetRating({
  whiskeyId,
  myRatingScore,
  setDeleted,
  isDeleted,
  memberId,
}: {
  whiskeyId: string;
  myRatingScore: memberRating | null;
  setDeleted: Function;
  isDeleted: boolean;
  memberId: string;
}): JSX.Element {
  // 화면 전환
  const { isEditing, toggle } = useIsEditingStore();

  // 컴포넌트 강제 리렌더링을 위한 상태
  const [key, setKey] = useState(Date.now()); // key를 추가하여 리렌더링을 강제

  // 별점 점수 변수 세팅
  const {
    setRatingMeat,
    setRatingSasimi,
    setRatingCheeze,
    setRatingChocolate,
    setRatingDriedSnack,
  } = useRatingStore();

  /** 평균 별점 점수 가져오기 */
  const {
    data: ratingInfo,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["rating", isEditing, key],
    queryFn: () => getAverageRatingsByWhiskeyId(whiskeyId),
  });

  const avgRating = ratingInfo?.avgRating; // 평균 점수 정보
  const ratingCount = ratingInfo?.ratingCount; // 점수 개수

  const deleteRatingMutation = useMutation({
    mutationFn: () => deleteRating(Number(myRatingScore?.rating_id)),
    onSuccess: () => {
      setDeleted(!isDeleted);
      setRatingMeat(0);
      setRatingSasimi(0);
      setRatingCheeze(0);
      setRatingChocolate(0);
      setRatingDriedSnack(0);
      setKey(Date.now());
    },
  });

  useEffect(() => {
    refetch(); // isEditing 변경 시 refetch 호출
    setKey(Date.now()); // key 업데이트하여 리렌더링 강제
  }, [isEditing]);

  // 화면 렌더링
  if (isLoading) {
    return <h1 className="main-text m-10">로딩중...</h1>;
  }
  if (!avgRating) {
    return (
      <div className="w-72 h-[207px] md:w-[605px] bg-[#f0f0f0] rounded-[10px] m-10 flex flex-col items-center justify-center gap-3">
        <h1 className="main-text">별점이 없습니다!</h1>
        {memberId && memberId !== "" ? (
          <>
            {" "}
            <h2 className="main-text">첫 별점을 남겨주세요!</h2>
            <DefaultButton onClick={toggle}>점수 입력</DefaultButton>
          </>
        ) : (
          <h2 className="main-text">로그인 후, 별점을 남겨주세요!</h2>
        )}
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-1 md:gap-3 relative w-3/4">
      <h1 className="main-text">위스키 페어링 점수</h1>
      <div className="flex justify-end pb-5 text-sm md:text-xl">
        <p>리뷰 {ratingCount}개</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 md:gap-4 mb-5">
        <StarInput
          id={111}
          ratingName="고기"
          ratingscore={avgRating.rating_meat}
        />
        <StarInput
          id={222}
          ratingName="회"
          ratingscore={avgRating.rating_sasimi}
        />
        <StarInput
          id={333}
          ratingName="치즈"
          ratingscore={avgRating.rating_cheeze}
        />
        <StarInput
          id={444}
          ratingName="초콜릿"
          ratingscore={avgRating.rating_chocolate}
        />
        <StarInput
          id={555}
          ratingName="마른 안주"
          ratingscore={avgRating.rating_dried_snack}
        />
      </div>
      {
        // 로그인 여부 확인
        memberId && memberId !== "" ? (
          myRatingScore ? (
            // 내 위스키 점수가 있을 경우
            <div>
              <h1 className="main-text mb-5">내 위스키 페어링 점수</h1>
              <div className="flex flex-col justify-center items-center gap-3 md:gap-4">
                <StarInput
                  id={666}
                  ratingName="고기"
                  ratingscore={myRatingScore.rating_meat}
                />
                <StarInput
                  id={777}
                  ratingName="회"
                  ratingscore={myRatingScore.rating_sasimi}
                />
                <StarInput
                  id={888}
                  ratingName="치즈"
                  ratingscore={myRatingScore.rating_cheeze}
                />
                <StarInput
                  id={999}
                  ratingName="초콜릿"
                  ratingscore={myRatingScore.rating_chocolate}
                />
                <StarInput
                  id={1000}
                  ratingName="마른 안주"
                  ratingscore={myRatingScore.rating_dried_snack}
                />
              </div>
            </div>
          ) : (
            // 내 위스키 점수가 없을 경우
            <div className="h-28 md:h-40 bg-[#f0f0f0] rounded-[10px] m-10 flex flex-col items-center justify-center gap-3">
              <h2 className="text-primary_color text-[11px] md:text-lg">
                내 점수를 입력해 주세요!
              </h2>
            </div>
          )
        ) : (
          // 로그인이 안 되어 있을 경우
          <div className="h-28 md:h-40 bg-[#f0f0f0] rounded-[10px] m-10 flex flex-col items-center justify-center gap-3">
            <h1 className="text-primary_color text-md md:text-xl font-bold">
              로그인해 주세요!
            </h1>
            <h2 className="text-primary_color text-[11px] md:text-lg">
              로그인 하시면 내 별점을 등록하거나
            </h2>
            <h2 className="text-primary_color text-[11px] md:text-lg">
              수정할 수 있습니다!
            </h2>
          </div>
        )
      }
      {memberId && memberId !== "" && (
        <div className="w-full flex justify-end py-5 gap-2">
          <DefaultButton onClick={toggle}>
            {myRatingScore ? "점수 수정" : "점수 입력"}
          </DefaultButton>
          {myRatingScore && (
            <DefaultButton
              className="delete-button-sm"
              onClick={() => {
                deleteRatingMutation.mutate();
              }}
            >
              점수 삭제
            </DefaultButton>
          )}
        </div>
      )}
    </div>
  );
}
