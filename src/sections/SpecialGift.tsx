import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import ShinyText from "../components/ShinyText";
import BlurText from "../components/BlurText";
import { FiGithub } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";

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
        <div className="h-screen flex items-center justify-center text-white text-3xl md:text-5xl font-bold leading-2 sticky top-0 overflow-hidden ">
          <h1 className="text-wrap flex flex-wrap">

          How do you contact me?
          </h1>
          <motion.div
            style={{ scale }}
            className=" bg-white w-[250vh] h-[250vh] absolute rounded-full"
          ></motion.div>
        </div>
      </div>
      <div className="h-screen bg-white flex items-center justify-center flex-col text-primary">
        <h1 className="font-semibold md:text-2xl text-xl  leading-none">
          <BlurText
            text="Get in touch."
            animateBy="words"
            direction="bottom"
            threshold={1}
          />
        </h1>
        <h1 className="font-bold md:text-9xl text-4xl font-playfair  italic leading-none">
          <ShinyText
            text="Let's Collaborate"
            speed={3}
            delay={0}
            color="#000000"
            shineColor="#525252"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
          />
        </h1>

        <div className="flex text-xl gap-1 mt-2">
          <a href="https://github.com/thesimpanze" target="_blank">
            <FiGithub />
          </a>
          <a href="https://linkedin.com/in/rasyid-nuruddin" target="_blank">
            <TiSocialLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpecialGift;
