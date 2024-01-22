import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';
import Skills from '../sections/Skills';

const Page = () => (
  <div className="bg-background overflow-hidden">
    <Navbar />
      <div id="hero" className="bg-page-gradient h-screen"><Hero /></div>
      <div id="about" className="bg-hero-gradient h-screen"><About /></div>
      <div id="explore" className="bg-hero-gradient h-screen"><Explore /></div>
      <div id="skills" className="bg-hero-gradient h-screen"><Skills /></div>
      <Feedback />
    <Footer />
  </div>
);

export default Page;
