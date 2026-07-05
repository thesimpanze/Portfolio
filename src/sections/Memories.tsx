import DomeGallery from "../components/DomeGallery";


const Memories = () => {
  return (
    <div className="w-full h-full">
        <h1 className="text-center text-4xl mb-5">Our Memories.</h1>
      <div className="w-[100vw] h-screen py-3">
        <DomeGallery />
      </div>
    </div>
  );
};

export default Memories;
