import Image from "next/image";
import Link from "next/link";

export default function WhiskeyItem({
  whiskeyId,
  whiskeyName,
  whiskeyThumbnailImage,
}: {
  whiskeyId: number;
  whiskeyName: string;
  whiskeyThumbnailImage: string;
}): JSX.Element {
  return (
    <Link href={`/whiskeyDetail/${whiskeyId}`}>
      <div className="w-64 h-80 flex flex-col items-center gap-2">
        <div className="w-64 h-64 rounded-lg relative flex justify-center">
          <Image
            src={whiskeyThumbnailImage}
            alt={`${whiskeyName} 썸네일 이미지`}
            width={200}
            height={200}
            className="w-64 h-64 object-cover"
            priority
          />
          <div className=" absolute inset-0 rounded-lg bg-black bg-opacity-5"></div>
        </div>
        <div className="w-64 h-auto text-center text-black text-xl break-keep">
          <p className="line-clamp-2 mx-1">{whiskeyName}</p>
        </div>
      </div>
    </Link>
  );
}
