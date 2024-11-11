import Image from "next/image";
import DefaultButton from "./DefaultButton";

export default function Header(): JSX.Element {
  return (
    <header className="mt-4 mx-5 flex flex-col gap-4 items-center">
      <div className="w-full flex flex-row justify-between">
        <Image
          src="/images/whiskey_logo.png"
          alt="위스키매치 사이트 로고"
          width={270}
          height={40}
          className="h-10 w-auto object-cover"
        />
        <div className="flex flex-row items-center gap-2 px-5">
          <div className="h-10 px-4 py-3 bg-white rounded-full border border-[#d9d9d9] justify-start items-center gap-2 flex">
            <input
              className="grow shrink basis-0 text-[#b3b3b3] text-base font-normal leading-none"
              placeholder="위스키를 검색해 보세요!"
            />
            <i className="fas fa-search" />
          </div>
          <div className="w-24 h-7 text-center flex justify-center items-end">
            {" "}
            홍길동 님
          </div>
          <DefaultButton>Logout</DefaultButton>
        </div>
      </div>
      <div className="w-full border-t border-gray-400 mb-6"></div>
    </header>
  );
}
