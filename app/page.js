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



/*
TODO

- [ ] fix weird circle too bright for lamp colour gradient, could be because of background
- [ ] make it mobile reponsive
- [ ] add skills
- [ ] edit explore popup card
- [ ] make project card transitions smoother
- [ ] fill in popup card with project info

*/

