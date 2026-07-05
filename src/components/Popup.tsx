import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Popup = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end end"],
  });

  const width = useTransform(scrollYProgress, [0.3, 0.5], ["30%", "100%"]);
  const height = useTransform(scrollYProgress, [0.3, 0.5], ["30%", "100vh"]);

  return (
    <section ref={sectionRef} className="h-[200vh] w-full ">
      <div className="sticky top-0 h-screen flex justify-center items-center ">
        <motion.div
          style={{ width, height }}
          className="bg-white text-primary font-grotesk flex justify-center items-center"
        >
          Something special for u.
        </motion.div>
      </div>
    </section>
  );
};

export default Popup;
