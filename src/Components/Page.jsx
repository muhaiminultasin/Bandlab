import React from "react";
import Navbar from "./common/Navbar";
import LandingIntro from "./LandingIntro";
import LandingUsp from "./LandingUsp";
import CTAblock from "./common/CTAblockComp";

function Page() {
  return (
    <>
      <Navbar />
      <LandingIntro />
      <LandingUsp />
      <CTAblock />
    </>
  );
}

export default Page;
