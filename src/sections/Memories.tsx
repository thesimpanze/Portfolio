import { useState, useEffect, useRef } from "react";
import CardSwap, { Card } from "../components/CardSwap";

interface MemoryItem {
  title: string;
  description: string;
  sub: string;
}

const memories: MemoryItem[] = [
  {
    title: "Kadar Group",
    sub: "2024 · Bandung",
    description:
      "",
  },
  {
    title: "Photobooth",
    sub: "2023 · Jakarta",
    description:
      "Sesi photobooth yang penuh tawa dan ekspresi bebas — mengabadikan setiap momen bersama orang-orang terbaik.",
  },
  {
    title: "Seenau",
    sub: "2023 · Yogyakarta",
    description:
      "Perjalanan ke Seenau, tempat di mana ketenangan alam bertemu dengan kehangatan kebersamaan yang sesungguhnya.",
  },
  {
    title: "Kiyatama",
    sub: "2022 · Bali",
    description:
      "Bersama Kiyatama, setiap langkah terasa bermakna — dari diskusi kreatif hingga momen santai yang penuh inspirasi.",
  },
  {
    title: "Card 5",
    sub: "2022 · Surabaya",
    description:
      "Kenangan indah dari perjalanan kelima, memperkuat ikatan dan mencetak pengalaman yang akan selalu diingat.",
  },
];

const Memories = () => {
  const [activeIdx, setActiveIdx] = useState(1); // after first swap, card[1] becomes front
  const [visible, setVisible] = useState(true);
  const prevIdx = useRef(activeIdx);

  const handleActiveChange = (idx: number) => {
    // Fade out → update text → fade in
    setVisible(false);
    setTimeout(() => {
      prevIdx.current = idx;
      setActiveIdx(idx);
      setVisible(true);
    }, 300);
  };

  const active = memories[activeIdx] ?? memories[0];

  return (
    <div className="w-full h-full">
      <div className="flex justify-center w-full">
        {/* LEFT: dynamic text panel */}
        <div className="w-[100vw] flex flex-col justify-center ml-5 ">
          <div
            style={{
              transition: "opacity 0.3s ease, transform 0.3s ease",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
            }} 
          >
            <span className="text-8xl font-black font-playfair italic block">
              {active.title}.
            </span>
            {/* <span className="mt-3 text-sm font-grotesk text-gray-400 block">
              {active.sub}
            </span> */}
            <span className="mt-4 font-grotesk font-semibold block ">
              {active.description}
            </span>
          </div>
          <button className="w-fit mt-5 px-1.5 py-0.5 border-2 font-semibold text-black cursor-pointer font-playfair">
            See detail
          </button>
        </div>

        {/* RIGHT: card stack */}
        <div
          style={{ height: "90vh", position: "relative" }}
          className=" w-full -mt-10"
        >
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
            onActiveIndexChange={handleActiveChange}
          >
            {memories.map((mem, i) => (
              <Card key={i}>
                <h3>{mem.title}</h3>
                <p>{mem.description}</p>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </div>
  );
};

export default Memories;
