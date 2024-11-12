import { useCallback, useEffect, useState } from "react";

interface StarRatingProps {
  rating: number;
  id: number;
}

function StarRating({ id, rating }: StarRatingProps) {
  const START_WIDTH_SIZE = 14;
  const STAR_COLOR = "#ffcc00";
  const EMPTY_STAR_COLOR = "#d9d9d9";
  const STAR_IDX_ARR = ["first", "second", "third", "fourth", "last"];

  const [ratesResArr, setRatesResArr] = useState([0, 0, 0, 0, 0]);

  const calcStarRatings = useCallback(() => {
    const tempStarRatingsArr = [0, 0, 0, 0, 0]; // 초기 비율
    let starVerScore = (rating * 20 * 70) / 100; // 별 하나 비율 점수
    let idx = 0; // 인덱스

    // 별 채우기
    while (starVerScore > START_WIDTH_SIZE) {
      tempStarRatingsArr[idx] = START_WIDTH_SIZE; // 별 한개 분량의 점수를 채우면
      idx += 1; // 다음 별로 이동(인덱스 이동)
      starVerScore -= START_WIDTH_SIZE; // 채운 만큼 남은 분량 뺌
    }
    tempStarRatingsArr[idx] = starVerScore; // 마지막 별에 남은 비율 할당
    return tempStarRatingsArr;
  }, [rating]);

  // 컴포넌트가 렌더링(별점 드래그)될 때마다 비율 업데이트
  useEffect(() => {
    setRatesResArr(calcStarRatings);
  }, [calcStarRatings]);

  return (
    <div className="flex items-center w-fit">
      {STAR_IDX_ARR.map((item, idx) => {
        const itemKey = `${id}${item}`;
        return (
          <span
            className="inline-flex mr-3 last:mr-0"
            key={`${itemKey}_${idx}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-14 h-14"
              viewBox={`0 0 ${START_WIDTH_SIZE} 13`} // 너비 및 높이 설정
              fill={EMPTY_STAR_COLOR} // 빈별 색상
            >
              {/* 별을 채우기 위한 clipPath 정의 */}
              <clipPath id={`${itemKey}StarClip`}>
                <rect width={ratesResArr[idx]} height="39" />
              </clipPath>
              {/* 별 모양의 Path 정의 */}
              <path
                id={`${itemKey}Star`}
                d="M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z"
                transform="translate(-2 -2)"
              />
              {/* use 태그를 사용해 clipPath를 적용해 별을 부분적으로 채움 */}
              <use
                clipPath={`url(#${itemKey}StarClip)`}
                href={`#${itemKey}Star`}
                fill={STAR_COLOR}
              />
            </svg>
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;
