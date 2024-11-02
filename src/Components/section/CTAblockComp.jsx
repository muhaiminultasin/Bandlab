import React from "react";
import Title from "../common/title";
import Button from "../common/Button";
import cn from "../../assets/lib/utility/cn";
import StoreButton from "../common/StoreButton";

function CTAblockComp() {

const StoreButtons = [
  {
    img:""
  },
]

  return (
    <section>
      <div className={cn(`grid grid-cols-1 md:grid-cols-2 bg-[#E3E9ED] gap-5 px-[25px] md:px-[140px] py-[100px] items-center`)}>
      <div>
        <Title
          titleClass={"text-[25px] md:text-[40px] font-[500]"}
          subtitleClass={"text-[#7E8999] text-base font-[400]"}
          title={"Keep 100% of your earnings"}
          subtitle={
            "Sell your music on Spotify, iTunes and more - and get paid for your music quickly. Plus, keep 100% of your rights."
          }
        />

        <Button
          Name={"Start Earning"}
          className={"py-3 text-white bg-[#000000] mt-5"}
        />
      </div>
      <div>
        <img src="./PBImage/distro-landing-revenue_2x.png" alt="" />
      </div>
    </div>

    <div className={cn(`grid grid-cols-1 md:grid-cols-2  gap-5 px-[20px] md:px-[140px] py-[100px] items-center`)}>

    <div>
        <img src="./PBImage/distro-landing-publish_2x.png" alt="" />
      </div>

      <div>
        <Title
          titleClass={"text-[25px] md:text-[40px] font-[500]"}
          subtitleClass={"text-[#7E8999] text-base font-[400]"}
          title={"Get your music out there faster"}
          subtitle={
            "Easily submit a single, EP, or album for release on any device. We’ll review and send it out to streaming services within 2 business days."
          }
        />

        <div className="flex gap-5 justify-center md:justify-start">
        <StoreButton img={"./PBImage/apple-logo-02.png"} title={"App Store"} subtitle={"Download on"} />
        <StoreButton img={"./PBImage/pl-logo.webp"} title={"Play Store"} subtitle={"Download on"} />
        </div>
      </div>
      
    </div>
    </section>
  );
}

export default CTAblockComp;
