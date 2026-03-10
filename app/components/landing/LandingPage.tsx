import HeroSection from "./HeroSection";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4"
import LandingSurface from "./LandingSurface"

export default function LandingPage() {
  return(
    <>
      <HeroSection/>;
      <LandingSurface>
          <Section2/>
          <Section3/>
          <Section4/>
      </LandingSurface> 
    </>
  )
}


