import LoginUi from "./ui";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
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
          <LoginUi />
          <div className="text-center">
            <p>test email: happy1234@gmail.com</p>
            <p>test password: happy1234</p>
          </div>
          <div className="text-center text-black text-sm md:text-base underline">
            <Link href={`/signup`}>회원가입</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
