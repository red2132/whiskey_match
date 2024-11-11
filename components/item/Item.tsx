import Image from "next/image";

export default function WhiskeyItem({
  whiskeyName,
  whiskeyThumbnailImage,
}: {
  whiskeyName: string;
  whiskeyThumbnailImage: string;
}): JSX.Element {
  return (
    <div className="w-64 h-80 flex flex-col items-center gap-2">
      <div className="w-64 h-64 rounded-lg relative flex justify-center">
        <Image
          src={whiskeyThumbnailImage}
          alt="위스키 썸네일 이미지"
          width={200}
          height={200}
          className="w-64 h-64 object-cover"
        />
        <div className=" absolute inset-0 rounded-lg bg-black bg-opacity-5"></div>
      </div>
      <div className="w-64 h-auto text-center text-black text-xl break-words">
        <p className="line-clamp-2 mx-1">{whiskeyName}</p>
      </div>
    </div>
  );
}
