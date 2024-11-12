import dummyWhiskey from "@/dummy/dummyWhiskey.json";
import Image from "next/image";

export default function WhiskeyDetail(): JSX.Element {
  return (
    <div className="w-full relative">
      <Image
        className="!w-full h-80 md:h-[540px] lg:h-[720px] brightness-50 object-fill"
        src={dummyWhiskey.whiskey_bg_image}
        alt="위스키 배경 이미지"
        height={720}
        width={720}
      />
      <Image
        className="rounded-md w-[40%] h-[50%] absolute right-[7%] top-[37%] object-fill"
        src={dummyWhiskey.whiskey_thumbnail_image}
        alt="위스키 썸네일 이미지"
        height={250}
        width={250}
      />
      <div className="text-[#ffffff] text-2xl md:text-4xl font-semibold absolute left-[5%] top-[14%]">
        {dummyWhiskey.whiskey_name}
      </div>
      <div className="text-[#ffffff] text-left text-sm sm:text-2xl absolute left-[5%] top-[37%] flex items-center justify-start">
        종류: {dummyWhiskey.whiskey_type}
        <br />
        용량: {dummyWhiskey.whiskey_volume}
        <br />
        도수: {dummyWhiskey.whiskey_abv}
        <br />
        국가: {dummyWhiskey.whiskey_nation}
      </div>
      <div className="text-[#ffffff] text-left text-[12px] sm:text-2xl absolute left-[5%] top-[70%] flex items-center justify-start">
        Aroma: {dummyWhiskey.whiskey_aroma}
        <br />
        taste: {dummyWhiskey.whiskey_taste}
        <br />
        Finish: {dummyWhiskey.whiskey_finish}
      </div>
    </div>
  );
}
