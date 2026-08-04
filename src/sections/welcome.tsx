import HoverMe from "../components/hover";
import { useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import PopupImg from "../components/PopupImg";

const Welcome = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {scrollY} = useScroll()
  const imgY = useTransform(scrollY, (y) => {
    const startScroll = window.innerHeight;
    if (y < startScroll) return -(y - startScroll) * 0.4;
    return -(y - startScroll) * 0.25;
  });
  return (
    <div className="h-[100vh] bg-black relative">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="z-50 fixed h-screen w-screen justify-center items-center top-0 left-0 flex  backdrop-blur-xs"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <PopupImg isVisible={setIsVisible} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="h-full w-full flex justify-center items-center ">
        <div className="flex flex-col justify-center items-center h-full text-white md:text-[15rem] text-6xl font-bold font-playfair ">
          <h1 className="m-0 leading-none">Rasyid's</h1>
          <span className="leading-none relative ">Portfolio</span>
        </div>
      </div>
      <HoverMe text="Click me!">
        <div className="flex justify-center items-end h-screen absolute w-fit top-0 left-1/2 -translate-x-1/2 cursor-pointer">
          <motion.img
            style={{y:imgY}}
            src="/ava-removebg-preview.png"
            alt=""
            className="h-[90%] object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => setIsVisible(true)}
          />
        </div>
      </HoverMe>
      {/* <div
        className={`absolute bottom-3 left-1/2 -translate-x-1/2
    bg-white text-primary rounded-full
    flex items-center 
    transition-all duration-500 ease-out delay-150
    ${show ? "pr-4 gap-2 cursor-pointer" : "p-0"}
  `}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <ArrowDown size={40} />

        <span
          className={`overflow-hidden whitespace-nowrap
      transition-all duration-300 ease-out
      ${
        show
          ? "max-w-[200px] opacity-100 translate-x-0"
          : "max-w-0 opacity-0 translate-x-2"
      }
    `}
        >
          Scroll me
        </span>
      </div> */}
    </div>
  );
};

export default Welcome;
