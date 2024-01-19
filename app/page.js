import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  // <div className="bg-primary-black overflow-hidden">
  <div className="bg-black overflow-hidden">
    <Navbar/>
    <div style={{ paddingTop: '60px' }}>
      <div id="hero" className="h-screen border-2 border-red-500"><Hero /></div>
      <div id="about" className="h-screen border-2"><About /></div>
      <div id="explore" className="h-screen border-2 border-green-500"><Explore /></div>
      <GetStarted />
      <WhatsNew />
      <World />
      <Insights />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
