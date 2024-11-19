"use server";

import { Ratings } from "@/types";
import calculateAverage from "@/utils/calculateAverage";
import { createServerSupabaseClient } from "@/utils/supabase/server";

/** 평균 점수 검색 */
export async function getAverageRatingsByWhiskeyId(
  whiskey_id: string
): Promise<{ avgRating: Ratings; ratingCount: number }> {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase
    .from("rating")
    .select(
      "rating_meat, rating_sasimi, rating_cheeze, rating_chocolate, rating_dried_snack"
    )
    .eq("whiskey_id", whiskey_id); // id가 whiskey_id와 같은 행 검색
  if (error) {
    console.error(
      "Error fetching average ratings by whiskey ID:",
      error.message
    );
    throw new Error("Failed to fetch average ratings by whiskey ID");
  }
  const avgRating = await calculateAverage(data);
  return { avgRating: avgRating, ratingCount: data.length };
}

export async function IsMemberRating(
  whiskey_id: string,
  member_id: string
): Promise<boolean> {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase
    .from("rating")
    .select("member_id")
    .eq("member_id", member_id) // member_id로 멤버 검색
    .eq("whiskey_id", whiskey_id);
  if (error) {
    console.error("Error fetching member", error.message);
    throw new Error("Failed to fetch member");
  }

  return data.length > 0 ? true : false;
}
