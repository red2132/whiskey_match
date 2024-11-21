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
        top: window.scrollY,
      });
    }
  }, []);
  return createPortal(
    <>
      <div
        className="fixed inset-0 bg-black/70"
        onClick={(e) => {
          e.stopPropagation(); // 이벤트 버블링 방지
          router.back();
        }}
      ></div>
      <dialog
        className="relative mt-5 border-none rounded-md"
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
      </dialog>
    </>,
    document.getElementById("modal-root") as HTMLElement
  );
}
