import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Break = () => {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=400vh",
          scrub: true,
          pin: true,
        },
      });

      tl.fromTo(
        ".word-welcome",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      )
        .fromTo(
          ".word-to",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 }
        )
        .fromTo(
          ".word-finished",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 }
        )
        .fromTo(
          ".word-calculator",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 }
        )
        .fromTo(
          ".word-pro",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 }
        )
        .fromTo(
          ".word-end",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 }
        );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={container}
      className="h-screen relative overflow-x-hidden overflow-y-visible text-primary bg-white "
    >
      <div className="h-[100vh] flex justify-center items-center sticky top-0 bg-white -z-10">
        <motion.h1
          initial={{ opacity: 1 }}
          className="font-black text-5xl flex gap-2 text-center"
        >
          <span className="word-welcome">Have</span>
          <span className="word-to ">you</span>
          <span className="word-finished ">finished</span>
          <span className="word-calculator ">watching</span>
          <span className="word-pro ">the</span>
          <span className="word-end ">memories?</span>
        </motion.h1>
      </div>
      
    </div>
  );
};

export default Break;
