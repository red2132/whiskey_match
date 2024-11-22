"use client";

import DefaultButton from "@/components/DefaultButton";
import { createBrowserSupabaseClient } from "@/utils/supabase/client";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage(): JSX.Element {
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
    <div className="flex flex-row justify-center">
      <div className="my-20 w-80 h-auto md:w-[450px] md:h-[600px] rounded-sm shadow-xl flex flex-col items-center p-6 md:p-0">
        <div className="w-full md:h-4/5 grid gap-6 md:gap-12 content-center">
          <div className="flex justify-center">
            <Image
              src="/images/whiskey_logo.png"
              alt="위스키매치 사이트 로고"
              width={270}
              height={40}
              className="h-auto w-60 md:w-80 object-cover"
              priority
            />
          </div>
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

          <div className="text-center text-black text-sm md:text-base">
            <Link href={`/signup`}>회원가입</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
