import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import ShinyText from "../components/ShinyText";
import BlurText from "../components/BlurText";

const SpecialGift = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center center", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div className="">
      <div className="h-[150vh] bg-primary relative" ref={ref}>
        <div className="h-screen flex items-center justify-center text-white text-5xl font-bold leading-2 sticky top-0 overflow-hidden">
          Last But Not Least
          <motion.div
            style={{ scale }}
            className=" bg-white w-[250vh] h-[250vh] absolute rounded-full"
          ></motion.div>
        </div>
      </div>
      <div className="h-screen bg-white flex items-center justify-center flex-col text-primary">
        <h1 className="font-semibold text-2xl  leading-none">
          <BlurText
            text="You're Invited to."
            animateBy="words"
            direction="bottom"
            threshold={1}
          />
        </h1>
        <h1 className="font-bold text-9xl font-playfair  italic leading-none">
          <ShinyText
            text="Birthday Date"
            speed={3}
            delay={0}
            color="#f56476"
            shineColor="#f9a3ae"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
          />
        </h1>
        <h1 className=" mt-3 italic">
          15.01.26 19:30 at&nbsp;
          <span className="font-semibold not-italic">
            Dopamine Bakehouse & Cafe
          </span>
        </h1>
      </div>
    </div>
  );
};

export default SpecialGift;
