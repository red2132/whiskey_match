import dummyWhiskey from "@/dummy/dummyWhiskey.json";
import Image from "next/image";

export default function WhiskeyDetail(): JSX.Element {
  return (
    <div className="w-full relative">
      <Image
        className="w-full h-72 md:h-[640px] brightness-50 object-fill"
        src={dummyWhiskey.whiskey_bg_image}
        alt="위스키 배경 이미지"
        height={640}
        width={720}
      />
      <Image
        className="rounded-md w-[40%] h-[45%] absolute right-[7%] bottom-[10%] object-fill"
        src={dummyWhiskey.whiskey_thumbnail_image}
        alt="위스키 썸네일 이미지"
        height={250}
        width={250}
      />
      <div className="text-[#ffffff] text-xl md:text-4xl font-semibold absolute left-[5%] top-[14%] w-[90%] break-words">
        <h1>{dummyWhiskey.whiskey_name}</h1>
      </div>
      <div className="text-[#ffffff] text-left text-sm md:text-2xl absolute left-[5%] top-[37%] flex flex-col justify-start w-[45%]">
        <p>종류: {dummyWhiskey.whiskey_type}</p>
        <p>용량: {dummyWhiskey.whiskey_volume}</p>
        <p>도수: {dummyWhiskey.whiskey_abv}</p>
        <p>국가: {dummyWhiskey.whiskey_nation}</p>
      </div>
      <div className="text-[#ffffff] text-left text-[11px] md:text-2xl absolute left-[5%] top-[70%] flex flex-col justify-start w-[45%] break-words">
        <p className="line-clamp-2">Aroma: {dummyWhiskey.whiskey_aroma}</p>
        <p className="line-clamp-2">taste: {dummyWhiskey.whiskey_taste}</p>
        <p className="line-clamp-2">Finish: {dummyWhiskey.whiskey_finish}</p>
      </div>
    </div>
  );
}
