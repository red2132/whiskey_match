"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function WhiskeyModal({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  // 모달이 닫힘 상태면 강제로 열음
  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      // 등장 시 제일 상단에 위치하도록 스크롤 조정
      dialogRef.current?.scrollTo({
        top: 0,
      });
    }
  }, []);
  return createPortal(
    <dialog
      className="relative overflow-auto mt-5 border-none backdrop-blur-sm backdrop-custom posit"
      ref={dialogRef}
      onClose={() => router.back()}
      onClick={(e) => {
        // 모달 배경 클릭 시 뒤로가기
        if ((e.target as HTMLElement).nodeName === "DIALOG") {
          router.back();
        }
      }}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
}
