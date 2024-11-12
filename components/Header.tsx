import Image from "next/image";
import DefaultButton from "./DefaultButton";
import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <header className="mt-4 mx-5 flex flex-col gap-4 items-center">
      <div className="w-full flex flex-col gap-3 md:flex-row justify-between items-center md:items-start">
        <Link href="/">
          <Image
            src="/images/whiskey_logo.png"
            alt="위스키매치 사이트 로고"
            width={270}
            height={40}
            className="!h-10 !w-auto object-cover"
          />
        </Link>

        <div className="flex w-full md:w-auto flex-col md:flex-row items-center gap-4 md:gap-2 px-5">
          <div className="w-full md:w-auto h-10 flex items-center px-4 py-3 bg-white rounded-full border border-[#d9d9d9] gap-2">
            <input
              className="w-full grow shrink basis-0 text-[#b3b3b3] text-base font-normal leading-none"
              placeholder="위스키를 검색해 보세요!"
            />
            <button>
              <Link href="/search">
                <i className="fas fa-search" />
              </Link>
            </button>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <div className="h-7 text-center flex justify-center items-end">
              홍길동 님
            </div>
            <DefaultButton>
              <Link href="/login">Login</Link>
            </DefaultButton>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-gray-400 mb-6"></div>
    </header>
  );
}
