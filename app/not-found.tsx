import DefaultButton from "@/components/DefaultButton";
import Image from "next/image";
import Link from "next/link";

export default function NotFound(): JSX.Element {
  return (
    <div className="flex flex-col items-center gap-6 my-40">
      <Image
        src={`/images/404.png`}
        alt="404 페이지 안내 이미지"
        height={400}
        width={1100}
        priority
      />
      <DefaultButton className="default-button-lg">
        <Link href={`/`}>홈으로</Link>
      </DefaultButton>
    </div>
  );
}
