import { useInView } from 'react-intersection-observer';

export const GlowLamp = ({ children, color, colorDark }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: false,
    delay: 500,
  });
  /* eslint-disable */
  //const baseClass = 'after:bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.1),transparent) relative flex flex-col items-center overflow-x-clip before:pointer-events-none before:absolute before:h-[40rem] before:w-full before:bg-[conic-gradient(from_90deg_at_90%_50%,#000212,rgb(var(--feature-color-dark))),conic-gradient(from_270deg_at_10%_50%,rgb(var(--feature-color-dark)),#000212)] before:bg-no-repeat before:transition-[transform,opacity] before:duration-1000 before:ease-in before:[mask:radial-gradient(100%_50%_at_center_center,_black,_transparent)] before:[background-size:50%_100%,50%_100%] before:[background-position:1%_0%,99%_0%] after:pointer-events-none after:absolute after:inset-0';

 const baseClass = `
  after:bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.1),transparent)]
  relative flex flex-col items-center overflow-x-clip
  before:pointer-events-none before:absolute before:h-[40rem] before:w-full
  before:bg-[conic-gradient(from_90deg_at_90%_50%,#000212,rgb(var(--feature-color-dark))),conic-gradient(from_270deg_at_10%_50%,rgb(var(--feature-color-dark)),#000212)]
  before:bg-no-repeat before:transition-[transform,opacity] before:duration-1000 before:ease-in
  before:[mask:radial-gradient(15%_13%_at_center_center,_black,_transparent)]
  before:[background-size:50%_100%,50%_100%] before:[background-position:1%_0%,99%_0%]
  after:pointer-events-none after:absolute after:inset-0
`.replace(/\s+/g, ' ').trim();
/* eslint-disable */

  const visibleClass = 'before:opacity-100 before:[transform:rotate(180deg)_scale(7)] md:before:[transform:rotate(180deg)_scale(3)]';
  const hiddenClass = 'before:rotate-180 before:opacity-40';

  const classes = `${baseClass} ${inView ? visibleClass : hiddenClass}`;

  return (
    <section
      ref={ref}
      className={classes}
      style={{
        '--feature-color': color,
        '--feature-color-dark': colorDark,
      }}
    >
      <div className="flex flex-col items-center mt-[12.8rem] mb-16 w-full md:mt-[25.2rem] md:mb-[12.8rem]">
        {children}
      </div>
    </section>
  );
};

export default GlowLamp;
