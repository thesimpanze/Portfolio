import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "../components/ScrollReveal";

const Wishes = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 0.4, 1], ["0%", "0%", "-35vh"]);
  const x = useTransform(scrollYProgress, [0, 0.4, 1], ["0%", "0%", "-33vw"]);

  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 1, 0.6]);

  return (
    <div
      ref={ref}
      className="h-[200vh] bg-primary flex flex-col justify-center items-center w-full"
    >
      <div className="h-screen sticky top-0 flex items-center justify-center w-full">
        <motion.h1
          style={{ y, scale, x }}
          className="text-white text-6xl font-bold text-center origin-center"
        >
          The Wishes.
        </motion.h1>
      </div>
      <div className=" h-screen w-full flex justify-center items-center sticky top-0">
        <div className="w-4/5">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={0}
            blurStrength={10}
            textClassName="text-white"
            wordAnimationEnd="center center"
          >
            On your 21st birthday, I hope your life blooms even more
            beautifully. May success follow every step you take, may your heart
            always be filled with grateful, and may you be wrapped in endless
            blessings. I pray that every road leading to your dreams is gentle
            and kind to you, my love.
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Wishes;
