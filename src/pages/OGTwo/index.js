import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import HeroSection from "./HeroSection";
import NavigationHeader from "./NavigationHeader";
import OGTwoSection from "./OGTwoSection";
import React from "react";

export default function OGTwoPage() {
  return (
    <>
      <Helmet>
        <title>About Our Services - The Design & Marketing Agency You Need</title>
        <meta
          name="description"
          content="Discover our work and services at Daulat & Exogear. Get in touch with the design and marketing agency you need to surge your business forward."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[62px] bg-black-900 py-[26px] sm:gap-[31px] sm:py-5">
        <Header />
        <div className="mb-1">
          {/* hero section */}
          <HeroSection />

          {/* navigation header section */}
          <NavigationHeader />

          {/* o g two section */}
          <OGTwoSection />
        </div>
      </div>
    </>
  );
}

