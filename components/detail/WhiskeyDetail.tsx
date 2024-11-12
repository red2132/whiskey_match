import dummyWhiskey from "@/dummy/dummyWhiskey.json";

export default function WhiskeyDetail(): JSX.Element {
  return (
    <div className="h-3/5 w-full relative">
      <img
        className="w-full h-full object-cover brightness-50"
        src={dummyWhiskey.whiskey_bg_image}
      />
      <img
        className="rounded-[5px] w-[40%] h-[50%] absolute right-[7%] top-[37%] object-fill"
        src={dummyWhiskey.whiskey_thumbnail_image}
      />
      <div className="text-[#ffffff] text-4xl font-semibold absolute left-[5%] top-[14%]">
        {dummyWhiskey.whiskey_name}
      </div>
      <div className="text-[#ffffff] text-left text-2xl absolute left-[5%] top-[37%] flex items-center justify-start">
        종류: {dummyWhiskey.whiskey_type}
        <br />
        용량: {dummyWhiskey.whiskey_volume}
        <br />
        도수: {dummyWhiskey.whiskey_abv}
        <br />
        국가: {dummyWhiskey.whiskey_nation}
      </div>
      <div className="text-[#ffffff] text-left text-2xl absolute left-[5%] top-[70%] flex items-center justify-start">
        Aroma: {dummyWhiskey.whiskey_aroma}
        <br />
        taste: {dummyWhiskey.whiskey_taste}
        <br />
        Finish: {dummyWhiskey.whiskey_finish}
      </div>
    </div>
  );
}
