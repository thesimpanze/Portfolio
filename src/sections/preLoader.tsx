import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";


interface PreLoaderProps {
  onFinish: () => void;
}
function PreLoader({ onFinish }: PreLoaderProps) {
  const container = useRef<HTMLDivElement>(null);
  const word = [
    "Assalamualaikum.",
    "Halo.",
    "你好",
    "Bonjour.",
    "Xin chào.",
    "안녕하세요",
  ];
  const [index, setIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(()=>{
    if(done) return
    const interval = setInterval(()=>{
        setIndex((prev)=>{
            if(prev === word.length -2){
                clearInterval(interval)
                setTimeout(()=>{
                    setDone(true)
                }, 500)
            }
            return (prev + 1)% word.length
        })
    }, 500)
    return()=>clearInterval(interval)
  }, [done])
  useGSAP(
    () => {
      if (!done) return;

      const tl = gsap.timeline({
        defaults: { duration: 1.5, ease: "expo.inOut" },
        onComplete: onFinish,
      });

      tl.to(container.current, {
        borderBottomLeftRadius: "100%",
        borderBottomRightRadius: "100%",
        height: "100px",
        yPercent: -100,
      });
    },
    { scope: container, dependencies: [done] }
  );
  return (
    <div
      ref={container}
      className="bg-primary fixed top-0 left-0 w-full h-screen flex justify-center items-center z-50 font-grotesk"
    >
      <AnimatePresence mode="wait">
        {!done && (
          <motion.span
            key={word[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.1 }}
            className="absolute text-white text-2xl font-semibold tracking-wide"
          >
            {word[index]}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PreLoader;
