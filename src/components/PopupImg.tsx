const PopupImg = ({ isVisible }: { isVisible: (value: boolean) => void }) => {
  return (
    <div
      className="fixed h-screen w-screen justify-center items-center top-0 left-0 flex z-50 "
      onClick={() => isVisible(false)}
    >
      <div className=" bg-white md:w-1/3 w-4/5 h-fit rounded-lg p-3 pt-4 flex flex-col gap-2">
        <span className="text-lg">Preface</span>
        <span>
          I’m an Informatics Engineering student at Politeknik Elektronika
          Negeri Surabaya (PENS) and a junior frontend developer passionate
          about building user-friendly web applications. I work with
          technologies like React.js, Laravel, Tailwind CSS, HTML, CSS, and
          JavaScript. I enjoy turning UI/UX designs into clean, responsive
          interfaces and continuously learning new tools to improve both
          functionality and user experience in every project I build.
        </span>
        <span>I can’t wait to be part of your team! See you soon!!</span>
        <span className="text-right">- Rasyid Nuruddin</span>
      </div>
    </div>
  );
};

export default PopupImg;
