import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import ScrollRevealText from "@/components/ScrollRevealText";
import Info from "@/components/Info";
import AboutUsSection from "@/components/AboutUsSection";
import InfluencerMarketingPage from "@/components/InfluencerMarketingPage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <ScrollRevealText />
      <InfluencerMarketingPage />
      <AboutUsSection />
      <Info/>
      <Footer/>
    </>
  );
}
