import SectionA1 from "./sections/sectionA1";
import AboutSection from "./sections/sectionA2";
import SectionA3 from "./sections/sectionA3";
import TeamSlider from "./sections/sectionA4";
import ClientLogos from "./sections/sectionA5";
export default function About() {
  return (
    <div>
      <SectionA1 />
      <AboutSection />
      <SectionA3 />
      <ClientLogos />

      <TeamSlider />    
    </div>
  );
}
