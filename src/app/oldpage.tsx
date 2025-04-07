import dynamic from "next/dynamic";

// Import components safely with dynamic imports and fallbacks
const Navbar = dynamic(() => import("@/components/navbar"), {
  ssr: true,
  loading: () => <div>Loading Navbar...</div>,
});

const HeroSection = dynamic(() => import("@/components/hero-section"), {
  ssr: true,
  loading: () => <div>Loading Hero...</div>,
});

const WhoWeAre = dynamic(() => import("@/components/who-we-are"), {
  ssr: true,
  loading: () => <div>Loading Who We Are...</div>,
});

const WhatWeDo = dynamic(() => import("@/components/what-we-do"), {
  ssr: true,
  loading: () => <div>Loading What We Do...</div>,
});

const WorkWithUs = dynamic(() => import("@/components/work-with-us"), {
  ssr: true,
  loading: () => <div>Loading Work With Us...</div>,
});

const PartnerWithUs = dynamic(() => import("@/components/partner-with-us"), {
  ssr: true,
  loading: () => <div>Loading Partner With Us...</div>,
});

const InterviewForm = dynamic(() => import("@/components/interview-form"), {
  ssr: true,
  loading: () => <div>Loading Interview Form...</div>,
});

const FloatingButton = dynamic(() => import("@/components/floating-button"), {
  ssr: true,
  loading: () => <div>Loading Floating Button...</div>,
});

const Footer = dynamic(() => import("@/components/footer"), {
  ssr: true,
  loading: () => <div>Loading Footer...</div>,
});

// Import ThemeScript normally since it s in the same directory
// import ThemeScript from "./theme-script";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* <ThemeScript /> */}
      <Navbar />
      <main>
        <HeroSection />
        <WhoWeAre />
        <WhatWeDo />
        <WorkWithUs />
        <PartnerWithUs />
        <InterviewForm />
      </main>
      <FloatingButton />
      <Footer />
    </div>
  );
}
