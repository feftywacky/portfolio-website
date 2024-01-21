import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';
import Skills from '../sections/Skills';

const Page = () => (
  // <div className="bg-primary-black overflow-hidden">
  <div className="bg-black overflow-hidden">
    <Navbar />
    <div style={{ paddingTop: '60px' }}>
      <div id="hero" className="h-screen"><Hero /></div>
      <div id="about" className="h-screen"><About /></div>
      <div id="explore" className="h-screen"><Explore /></div>
      <div id="skills" className="h-screen border-2 border-blue-500"><Skills /></div>

      {/* <GetStarted />
      <WhatsNew />
      <World />
      <Insights /> */}
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
