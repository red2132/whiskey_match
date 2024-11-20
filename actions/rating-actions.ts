"use server";

import { memberRating, Ratings } from "@/types";
import { Database } from "@/types_db";
import calculateAverage from "@/utils/calculateAverage";
import { createServerSupabaseClient } from "@/utils/supabase/server";

export type RatingInsert = Database["public"]["Tables"]["rating"]["Insert"];
export type RatingUpdate = Database["public"]["Tables"]["rating"]["Update"];

/** 별점 평균 점수 검색 */
export async function getAverageRatingsByWhiskeyId(
  whiskey_id: string
): Promise<{ avgRating: Ratings; ratingCount: number } | null> {
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
  if (data.length > 0) {
    const avgRating = await calculateAverage(data);
    return { avgRating: avgRating, ratingCount: data.length };
  }
  return null;
}

/** 내 별점 점보 검색 */
export async function GetMemberRating(
  whiskey_id: string,
  member_id: string
): Promise<memberRating | null> {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase
    .from("rating")
    .select(
      "rating_id, rating_meat, rating_sasimi, rating_cheeze, rating_chocolate, rating_dried_snack"
    )
    .eq("member_id", member_id) // member_id로 멤버 검색
    .eq("whiskey_id", whiskey_id)
    .single();

  if (!data) {
    return null;
  }

  return data;
}

/** 내 별점 정보 입력 */
export async function createRating(ratingInfo: RatingInsert) {
  const supabase = await createServerSupabaseClient();

  const { error } = await supabase.from("rating").insert({
    ...ratingInfo,
  });

  if (error) {
    console.error("Error creating rating", error.message);
    throw new Error("Failed to create rating");
  }
}

/** 내 별점 정보 수정 */
export async function updateRating(ratingInfo: RatingUpdate) {
  const supabase = await createServerSupabaseClient();

  const { error } = await supabase
    .from("rating")
    .update({
      ...ratingInfo,
      created_at: new Date().toISOString(),
    })
    .eq("rating_id", ratingInfo.rating_id);

  if (error) {
    console.error("Error updating rating", error.message);
    throw new Error("Failed to update rating");
  }
}

/** 내 별점 점보 삭제 */
export default async function deleteRating(ratingId: number) {
  const supabase = await createServerSupabaseClient();

  const { error } = await supabase
    .from("rating")
    .delete()
    .eq("rating_id", ratingId);

  if (error) {
    console.error("Error deleting rating", error.message);
    throw new Error("Failed to delete rating");
  }
}
