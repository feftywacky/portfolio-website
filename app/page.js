import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';
import Skills from '../sections/Skills';

const Page = () => {
  return (
    <>
      <div className="bg-background overflow-hidden">
        <Navbar />
        <div className="bg-page-gradient"><Hero /></div>
        <About />
        <Explore />
        <Skills />
        <Feedback />
        <Footer />
      </div>
    </>
)};

export default Page;


