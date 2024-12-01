"use client";

import DefaultButton from "@/components/DefaultButton";
import { createBrowserSupabaseClient } from "@/utils/supabase/client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginUi(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const supabase = createBrowserSupabaseClient();
  const router = useRouter();
  const loginMutaion = useMutation({
    mutationFn: async () => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        alert("잘못된 입력값입니다");
        return;
      }
      if (data) {
        await router.push("/");
      }
    },
  });
  return (
    <div className="flex flex-col gap-4 items-center">
      <input
        type="email"
        className="w-full max-w-xs md:w-80 h-10 bg-gray-100 border border-gray-300 p-2 rounded-md"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="w-full max-w-xs md:w-80 h-10 bg-gray-100 border border-gray-300 p-2 rounded-md"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <DefaultButton
        className="default-button-xl mt-2 w-full max-w-xs md:w-80"
        onClick={() => {
          loginMutaion.mutate();
        }}
        disabled={loginMutaion.isPending}
      >
        Login
      </DefaultButton>
    </div>
  );
}
