import { useEffect, useState } from "react";
import PreLoader from "./sections/preLoader";
import Hero from "./sections/hero";
import Lenis from "lenis";
import Welcome from "./sections/welcome";
import ContentList from "./sections/contentList";
import Popup from "./components/Popup";
import Memories from "./sections/Memories";
import Break from "./sections/Break";
import Wishes from "./sections/Wishes";
import SpecialGift from "./sections/SpecialGift";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 3.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div className="">
      <div className="  scrollbar-thin">
        {loading && <PreLoader onFinish={() => setLoading(false)} />}
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <Hero />
        </div>
        <div className="h-[250vh]">
          <div className="h-[100vh]"></div>
          <div className="sticky top-0">
            <Welcome />
          </div>
        </div>
        <div className="h-[300vh]">
          <div className="sticky top-0 -z-10">
            <ContentList />
          </div>
          <Popup />
        </div>
        <div className="h-[110vh] bg-white overflow-hidden">
          <Memories />
        </div>

        <Break />
        <Wishes />
        <SpecialGift />
      </div>
      <SpeedInsights/>
    </div>
  );
}

export default App;
