import React from "react";
import Title from "./common/title";
import Button from "./common/Button";

function LandingIntro() {


    const companyLogo = [
        {
            img:"./PBImage/tidal.svg"
        },
        {
            img:"./PBImage/apple-music.svg"
        },
        {
            img:"./PBImage/youtube-music.svg"
        },
        {
            img:"./PBImage/spotify.svg"
        },
        {
            img:"./PBImage/amazon-music.svg"
        },
        {
            img:"./PBImage/tiktok.svg"
        },
    ]


  return (
    <div>
        <div id="LandingIntro-top" className=" relative  bg-[#000000] pt-[50px] md:pt-[130px] pb-10 overflow-hidden">
            <div className="relative z-30 px-[20px] md:px-[140px]">
                <Title
                titleClass={"text-[#ffffff] max-w-[588px] text-[30px] md:text-[70px] md:leading-[90px]"}
                subtitleClass={"text-[#ffffff]  max-w-[430px] leading-6"}
                title={"Create today, go global tomorrow"}
                subtitle={
                    "Music distribution made easy. Get your music on major platforms. Keep 100% earnings with BandLab Membership."
                }
                />
                <Button className={"py-4 px-5 mt-5"} Name={"Try it Now"} />
            </div>
            <div className="md:w-[714px] mt-[-50px] md:mt-0 md:h-[600px]  md:absolute top-10 right-20 z-20">
                <img
                src="./PBImage/Distribution_LP_Hero_2x.png"
                alt=""
                className="block w-[100%] bg-center"
                />
            </div>

        </div>

        

        <div id="LandingIntro-bottom " className="bg-[#F1F4F6] pt-5 pb-10">
            <ul className="grid grid-cols-2 md:grid-cols-6 mb-5 px-[20px] md:px-[140px]">
                {companyLogo.map(({img}) => {
                    return <li className="flex justify-center"><img src={img} alt="" /></li>
                })}
            </ul>

            <p className="fpnt-[400] text-[#7E8999] text-center">Release your music on major music platforms. Keep your earnings and rights.</p>
        </div>
    </div>
  );
}

export default LandingIntro;
