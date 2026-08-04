import CircularText from "../components/CircularText";

function Hero() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center font-[1000]">
      <div className="text-black md:text-[9rem] text-[3rem] h-[85%]  flex flex-col justify-center items-center relative ">
        <div className="absolute top-0 right-1/8 -translate-y-5 ">
          <CircularText
            text="*RASYID*NURUDDIN"
            onHover="speedUp"
            spinDuration={20}
            className="text-black"
          />
        </div>
        <div className=" uppercase   text-center  flex  items-center gap-2 w-2/3">
          <h1 className="">Hello!</h1>
        </div>
        <div className=" uppercase  text-right w-full pr-16 h-fit flex justify-center items-center  gap-16">
          <div className=" text-sm w-[30%] text-left m-auto font-normal ">
            I am a human with a passion for creating beautiful and functional
            user interfaces. I have experience in frontend tools like ReactJS.
          </div>
          <h1 className="">There</h1>
        </div>
        <div className=" uppercase  text-center">whuzzup?</div>
      </div>
    </div>
  );
}

export default Hero;
