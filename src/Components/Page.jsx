import React from "react";
import Navbar from "./common/Navbar";
import LandingIntro from "./section/LandingIntro"
import LandingUsp from "./section/LandingUsp";
import CTAblockComp from "./section/CTAblockComp"
import CTAadaptiveComp from "./section/CTAadaptiveComp";
import Membership from "./section/Membership";
import SingUpBlock from "./section/SingUpBlock";


function Page() {
  return (
    <>
      <Navbar />
      <LandingIntro/>
      <LandingUsp/>
      <CTAblockComp/>
      <CTAadaptiveComp/>
      <Membership/>
      <SingUpBlock/>
    </>
  );
}

export default Page;
