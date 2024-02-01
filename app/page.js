import { Footer, Navbar } from '../components';
import { About, Explore, Hero } from '../sections';
import Skills from '../sections/Skills';

const Page = () => {
  return (
    <>
      <div className="bg-background overflow-hidden">
        <Navbar />
        <div id="home" className="bg-page-gradient h-screen"><Hero /></div>
        <div id="about" className="flex flex-col h-screen overflow-hidden"><About /></div>
        <div id = "explore" className="relative flex flex-col overflow-hidden h-screen"><Explore /></div>
        <div id="skills" className="relative flex flex-col overflow-hidden"><Skills /></div>
        <Footer />
      </div>
    </>
  )
};

export default Page;



/*
TODO

- [x] fix weird circle too bright for lamp colour gradient, could be because of background
- [x] make it mobile reponsive
- [x] add skills
- [x] edit explore popup card
- [ ] make project card transitions smoother
- [x] fill in all text
- [x] fix skill toggle bugs (all button not toggling when swapping to another category, colour not resetting when hovering)
- [ ] animating skill icon paths
- [x] make all stroke widths the same on refresh (dont require hovering to change stroke width directly to css)
- [x] ui changes to skills - text sliding up, double text pushing it up, padding for toggle buttons, edit glow around toggle buttons
- [x] add footer
- [x] mess with colour combinations/ change colour of buttons to blue
- [x] explore modal hover highlight not working
- [ ] update hero pfp

skills
https://www.svgrepo.com

for bordered icons:
svg: export optimized
png: export 256x256
*/

