import { useInView } from "react-intersection-observer";

export const GlowLamp = ({ children, color, colorDark }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  const baseClass = "after:bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.1),transparent) relative flex flex-col items-center overflow-x-clip before:pointer-events-none before:absolute before:h-[40rem] before:w-full before:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--feature-color-dark))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-color-dark)),#000212)] before:bg-no-repeat before:transition-[transform,opacity] before:duration-1000 before:ease-in before:[mask:radial-gradient(100%_50%_at_center_center,_black,_transparent)] before:[background-size:50%_100%,50%_100%] before:[background-position:1%_0%,99%_0%] after:pointer-events-none after:absolute after:inset-0";
  const visibleClass = "is-visible before:opacity-100 before:[transform:rotate(180deg)_scale(2)]";
  const hiddenClass = "before:rotate-180 before:opacity-40";

  const classes = `${baseClass} ${inView ? visibleClass : hiddenClass}`;

  return (
    <section
      ref={ref}
      className={classes}
      style={
        {
          "--feature-color": color,
          "--feature-color-dark": colorDark,
        }
      }
    >
      <div className="mt-[12.8rem] mb-16 w-full md:mt-[25.2rem] md:mb-[12.8rem]">
        {children}
      </div>
    </section>
  );
};

export default GlowLamp;