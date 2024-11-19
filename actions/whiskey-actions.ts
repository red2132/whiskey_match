"use server";

import { Database } from "@/types_db";
import { createServerSupabaseClient } from "@/utils/supabase/server";

export type WhiskeyRow = Database["public"]["Tables"]["whiskey"]["Row"];

/** 추천 위스키 출력(랜덤 8개) */
export async function getRecoWhiskies(): Promise<WhiskeyRow[]> {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from("whiskey").select("*").limit(8); // 최대 8개
  if (error) {
    console.log(error);
    throw new Error("Failed to fetch whiskies");
  }

  return data;
}

/** 위스키 상세 검색 */
export async function getWhiskeyById(
  whiskey_id: string
): Promise<WhiskeyRow | null> {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("whiskey")
    .select("*")
    .eq("whiskey_id", whiskey_id) // id가 whiskey_id와 같은 행 검색
    .single(); // 단일 결과만 반환

  if (error) {
    console.error("Error fetching whiskey by ID:", error.message);
    throw new Error("Failed to fetch whiskey by ID");
  }

  return data;
}

/** 위스키 검색 */
export async function getWhiskeyByName(
  whiskeyName: string
): Promise<WhiskeyRow[] | null> {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("whiskey")
    .select("*")
    .like("whiskey_name", `%${whiskeyName}%`);

  if (error) {
    throw new Error("Failed to fetch whiskey by ID");
  }

  return data;
}
