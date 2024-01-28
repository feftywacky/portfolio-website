import { Footer, Navbar } from '../components';
import { About, Explore, Hero } from '../sections';
import Skills from '../sections/Skills';

const Page = () => {
  return (
    <>
      <div className="bg-background overflow-hidden">
        <Navbar />
        <div id="hero" className="bg-page-gradient"><Hero /></div>
        <div id="about" className="flex flex-col justify-center border-2 border-green-500 "><About /></div>
        <div id="explore" className="flex flex-col justify-center border-2 border-blue-500"><Explore /></div>
        <div id="skills" className="flex flex-col justify-center border-2 border-red-500"><Skills /></div>
        <Footer />
      </div>
    </>
  )
};

export default Page;



/*
TODO

- [x] fix weird circle too bright for lamp colour gradient, could be because of background
- [ ] make it mobile reponsive
- [ ] add skills
- [ ] edit explore popup card
- [ ] make project card transitions smoother
- [ ] fill in popup card with project info
- [ ] add footer
- [ ] mess with colour combinations/ change colour of buttons to blue
-> svg png 256 x 256

*/

