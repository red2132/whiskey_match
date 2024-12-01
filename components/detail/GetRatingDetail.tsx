"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import useIsEditingStore from "@/store/useIsEditingStore";
import GetRating from "./rating/GetRating";
import { GetMemberRating } from "@/actions/rating-actions";
import UpdateRating from "./rating/UpdateRating";
import CreateRating from "./rating/CreateRating";
import { getUserId } from "@/actions/auth-actions";

export default function GetRatingDetail({ whiskeyId }: { whiskeyId: string }) {
  const { isEditing, setIsEditing } = useIsEditingStore();
  const [isDeleted, setDeleted] = useState(false);

  const { data: memberId = "" } = useQuery({
    queryKey: ["getMemberIdInDetail"],
    queryFn: () => getUserId(),
  });

  const { data: myRatingScore } = useQuery({
    queryKey: [isEditing, isDeleted, memberId],
    queryFn: () => GetMemberRating(whiskeyId, memberId),
    enabled: !!memberId,
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
        memberId={memberId}
      />
    );
  } else {
    if (myRatingScore) {
      return <UpdateRating myRatingScore={myRatingScore} />;
    } else {
      return <CreateRating memberId={memberId} whiskeyId={whiskeyId} />;
    }
  }
}
