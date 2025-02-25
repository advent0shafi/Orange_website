import SectionH1 from "./section/SectionH1";
import SectionH2 from "./section/SectionH2";
import ContactForm from "./section/SectionH3";
import AboutSection from "./section/SectionH4";
import SectionH5 from "./section/SectionH5";
import SectionH6 from "./section/SectionH6";
export default function Home() {
  return (
    <main className="">
     <SectionH1/>
     <SectionH2 />
     <ContactForm/>
     <AboutSection/>
     <SectionH5/>
     <SectionH6/>
    </main>
  );
}
