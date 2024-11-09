import Image from "next/image";

export default function Header(): React.ReactNode {
  return (
    <header className="p-4 w-full flex flex-col justify-center gap-4">
      <div className="grid grid-cols-2 w-full">
        <div className="w-[200px]">
          <Image
            src="/images/whisky_logo.png"
            alt="위스키 매치 로고"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="flex flex-row justify-end gap-5">
          <div className="flex flex-row gap-2">
            <div className="flex px-4 py-3 rounded-lg border-2 border-gray-600 overflow-hidden max-w-md mx-auto">
              <input
                type="text"
                placeholder="위스키를 검색해 보세요!"
                className="w-full outline-none bg-transparent text-gray-600 text-sm"
              />
              <i className="fas fa-search"></i>
            </div>
          </div>
          <p className="py-3">홍길동 님 </p>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            로그인
          </button>
        </div>
      </div>
      <hr className="border-t-2 border-gray-400" />
    </header>
  );
}
