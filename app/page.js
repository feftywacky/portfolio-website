import { Footer, Navbar } from '../components';
import { About, Explore, Hero } from '../sections';
import Skills from '../sections/Skills';

const Page = () => {
  return (
    <>
      <div className="bg-background overflow-hidden">
        <Navbar />
        <div id="home" className="bg-page-gradient"><Hero /></div>
        <div id="about" className="flex flex-col justify-center "><About /></div>
        <div id="explore" className="flex flex-col justify-center "><Explore /></div>
        <div id="skills" className="flex flex-col justify-center "><Skills /></div>
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
- [ ] fill in all text
- [ ] fix skill toggle bugs (all button not toggling when swapping to another category, colour not resetting when hovering)
- [ ] changing skill icon stroke width
- [ ] animating skill icon paths
- [ ] make all stroke widths the same on refresh (dont require hovering to change stroke width directly to css)
- [x] add footer
- [x] mess with colour combinations/ change colour of buttons to blue

skills
https://www.svgrepo.com

for bordered icons:
svg: export optimized
png: export 256x256
*/

