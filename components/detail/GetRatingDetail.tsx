"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import useIsEditingStore from "@/store/useIsEditingStore";
import GetRating from "./rating/GetRating";
import { GetMemberRating } from "@/actions/rating-actions";
import UpdateRating from "./rating/UpdateRating";
import CreateRating from "./rating/CreateRating";

export default function GetRatingDetail({ whiskeyId }: { whiskeyId: string }) {
  const { isEditing, setIsEditing } = useIsEditingStore();
  const [isDeleted, setDeleted] = useState(false);
  // 내 별점 점수 확인
  const { data: myRatingScore } = useQuery({
    queryKey: [isEditing, isDeleted],
    queryFn: () => GetMemberRating(whiskeyId, "happy1234"),
  });

  useEffect(() => {
    // 컴포넌트가 언마운트될 때 isActive를 false로 설정
    return () => {
      setIsEditing(false);
    };
  }, []);

  if (!isEditing) {
    return (
      <GetRating
        whiskeyId={whiskeyId}
        myRatingScore={myRatingScore || null}
        isDeleted={isDeleted}
        setDeleted={setDeleted}
      />
    );
  } else {
    if (myRatingScore) {
      return <UpdateRating myRatingScore={myRatingScore} />;
    } else {
      return <CreateRating memberId="happy1234" whiskeyId={whiskeyId} />;
    }
  }
}
