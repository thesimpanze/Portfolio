import { motion } from "motion/react";


const ContentList = () => {
  return (
    <div className="h-[100vh] bg-primary">
      <div className="flex font-grotesk justify-center items-center gap-10 h-full text-white text-center font-black relative">
        <h1 className=" text-9xl ">RECENTLY</h1>
        

        <motion.div
          
          className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 font-playfair text-[25rem] leading-none font-bold"
        >
          <span
            className=" absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 font-playfair text-[25rem] leading-none font-bold "
            style={{ WebkitTextStroke: "10px #000000" }}
          >
            3
          </span>
          <span className=" absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 font-playfair text-[25rem] leading-none font-bold ">
            3
          </span>
        </motion.div>
        <span className="text-9xl">PROJECTS</span>
      </div>
    </div>
  );
};

export default ContentList;
