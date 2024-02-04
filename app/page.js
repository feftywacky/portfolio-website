import { Footer, Navbar } from "../components";
import { About, Explore, Hero } from "../sections";
import Skills from "../sections/Skills";

const Page = () => (
  <div className="bg-background overflow-hidden">
    <Navbar />
    <div id="home" className="bg-page-gradient h-screen overflow-visible">
      <Hero />
    </div>
    <div
      id="about"
      className="flex flex-col h-auto lg:h-screen overflow-visible"
    >
      <About />
    </div>
    <div
      id="explore"
      className="flex flex-col h-auto lg:h-screen overflow-visible"
    >
      <Explore />
    </div>
    <div
      id="skills"
      className="flex flex-col h-auto lg:h-screen overflow-hidden sm:overflow-visible"
    >
      <Skills />
    </div>
    <div className="flex flex-col h-auto">
      <Footer />
    </div>
  </div>
);

export default Page;

/*
svg skill icons

images/svg/png -> https://www.svgrepo.com

for bordered icons:
svg: export optimized
png: export 256x256
*/
