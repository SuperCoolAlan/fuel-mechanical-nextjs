import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Fuel Mechanical, LLC", 
  description: "This is About Page for Fuel Mechanical, LLC", 
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="We are a team of local HVAC experts providing commercial and residential services and expertise for installation, maintenance, repair, and operation of air quality systems."
      />
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
