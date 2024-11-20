"use client";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import useIsEditingStore from "@/store/useIsEditingStore";
import GetRating from "./GetRating";
import { GetMemberRating } from "@/actions/rating-actions";
import UpdateRating from "./UpdateRating";
import CreateRating from "./CreateRating";

export default function RatingDetail2({ whiskeyId }: { whiskeyId: string }) {
  const { isEditing, setIsEditing } = useIsEditingStore();

  // 내 별점 점수 확인
  const { data: isRating, refetch } = useQuery({
    queryKey: ["isRating", isEditing],
    queryFn: () => GetMemberRating(whiskeyId, "happy1234"),
  });

  useEffect(() => {
    // 컴포넌트가 언마운트될 때 isActive를 false로 설정
    return () => {
      setIsEditing(false);
    };
  }, []);

  useEffect(() => {
    refetch;
  }, [isEditing]);

  if (!isEditing) {
    return <GetRating whiskeyId={whiskeyId} isRating={isRating || null} />;
  } else {
    if (isRating) {
      return <UpdateRating isRating={isRating} />;
    } else {
      return <CreateRating memberId="happy1234" whiskeyId={whiskeyId} />;
    }
  }
}
