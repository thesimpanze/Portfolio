import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "../components/ScrollReveal";

const Wishes = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 0.4, 1], ["0%", "0%", "-30vh"]);
  const x = useTransform(scrollYProgress, [0, 0.4, 1], ["0%", "0%", "-31vw"]);

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
          Recently Use.
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
            I shape ideas into interfaces with React and Next.js, giving
            structure and speed to what once was just a sketch in Figma.
            Tailwind CSS helps me style faster without losing precision, while
            TypeScript and Laravel keep everything honest, tidy, and working as
            it should.
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Wishes;
