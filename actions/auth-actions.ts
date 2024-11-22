"use server";

import { createServerSupabaseClient } from "@/utils/supabase/server";

/** 로그인 유저 정보 가져오기 */
export async function getUserId(): Promise<string> {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user?.email?.split("@")?.[0] || "";
}

/** 로그아웃 */
export async function logout() {
  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error(error);
  }
}
