export default function WhiskeyDetail(): React.ReactNode {
  return (
    <div className="h-screen w-screen">
      <div className={"h-4/5 w-1/2 relative"}>
        <img
          className="w-full h-full object-cover brightness-50"
          src="images/dumi/whiskey_image2.png"
        />
        <img
          className="rounded-[5px] w-[40%] h-[50%] absolute right-[7%] top-[37%] object-fill"
          src="images/dumi/whiskey_image1.png"
        />
        <div className="text-[#ffffff] lg:text-4xl md:text-2xl font-semibold absolute left-[5%] top-[14%]">
          발베니 14년 캐리비안 캐스크
          <br />
          에디션{" "}
        </div>
        <div className="text-[#ffffff] text-left lg:text-2xl md:text-lg absolute left-[5%] top-[37%] flex items-center justify-start">
          종류: 싱글몰트 위스키
          <br />
          용량: 700ml
          <br />
          도수: 43%
          <br />
          국가: 스코틀랜드{" "}
        </div>
        <div className="text-[#ffffff] text-left lg:text-2xl md:text-sm absolute left-[5%] top-[70%] flex items-center justify-start">
          Aroma: 토피, 바닐라, 과일
          <br />
          taste: 바닐라, 오크, 과일
          <br />
          Finish: 부드러운, 따뜻한{" "}
        </div>
      </div>
    </div>
  );
}
