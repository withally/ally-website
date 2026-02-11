import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import WhatIsAlly from "@/components/sections/WhatIsAlly";
import WhyNow from "@/components/sections/WhyNow";
import HowItWorks from "@/components/sections/HowItWorks";
import WhoBenefits from "@/components/sections/WhoBenefits";
import WhatToExpect from "@/components/sections/WhatToExpect";
import Hiring from "@/components/sections/Hiring";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <WhatIsAlly />
        <WhyNow />
        <HowItWorks />
        <WhoBenefits />
        <WhatToExpect />
        <Hiring />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
