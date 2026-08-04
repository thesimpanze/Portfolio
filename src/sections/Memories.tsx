import { useState, useRef } from "react";
import CardSwap, { Card } from "../components/CardSwap";

import imgDashboard from "../assets/Dashboard.png";
import imgDirava from "../assets/Dirava.png";
import imgKiyatama from "../assets/Kiyatama.png";
import imgPhotobooth from "../assets/Photobooth.png";
import imgSeenau from "../assets/Seenau.png";

interface MemoryItem {
  title: string;
  description: string;
  sub: string;
  image: string;
}

const memories: MemoryItem[] = [
  {
    title: "Kadar Group",
    sub: "2024 · Bandung",
    description:
      "Engineered a lightweight, high-performance dashboard capable of visualizing and updating thousands of real-time data points, built with React.js, Zustand for state management, React Router for navigation, Leaflet for interactive mapping, and Recharts for data visualization.",
    image: imgDashboard,
  },
  {
    title: "AI Powered Photobooth",
    sub: "2023 · Jakarta",
    description:
      "Developed a containerized photobooth application with real-time facial AR filters, built on Next.js 16 and React 19, leveraging MediaPipe Tasks Vision for on-device face detection and tracking, and deployed via Docker for consistent, portable environments.",
    image: imgPhotobooth,
  },
  {
    title: "Seenau",
    sub: "2023 · Yogyakarta",
    description:
      "Pomodoro-based productivity app with task tracking and focus-time analytics, built with React 19, Vite, Tailwind CSS, and Recharts, integrated with a secure OTP-verified auth backend.",
    image: imgSeenau,
  },
  {
    title: "Kiyatama",
    sub: "2022 · Bali",
    description:
      "Company profile site for an industrial engineering firm, featuring animated landing page, service showcase, and smooth-scroll UX, built with React, Vite, Tailwind CSS, and Framer Motion.",
    image: imgKiyatama,
  },
  {
    title: "Dirava",
    sub: "2022 · Surabaya",
    description:
      "A web-based speed monitoring system built with React.js and Laravel, integrated using Inertia.js for seamless server-side rendering (SSR).",
    image: imgDirava,
  },
];

const Memories = () => {
  const [activeIdx, setActiveIdx] = useState(1);
  const [visible, setVisible] = useState(true);
  const prevIdx = useRef(activeIdx);

  const handleActiveChange = (idx: number) => {
    setVisible(false);
    setTimeout(() => {
      prevIdx.current = idx;
      setActiveIdx(idx);
      setVisible(true);
    }, 300);
  };

  const active = memories[activeIdx] ?? memories[0];

  const CARD_W = 640;
  const CARD_H = 360;

  return (
    <div className="w-full h-full">
      {/* Desktop: flex-row | Mobile: flex-col (card atas, teks bawah) */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-center w-full h-full md:gap-16 px-6 py-10 ">

        {/* Card stack — ukuran eksplisit, pb besar agar stack 3D tidak overlap teks */}
        <div
          className="relative flex-shrink-0 overflow-visible scale-[0.5] sm:scale-75 lg:scale-100"
          style={{ width: CARD_W, height: CARD_H }}
        >
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            width={CARD_W}
            height={CARD_H}
            delay={5000}
            pauseOnHover={false}
            onActiveIndexChange={handleActiveChange}
          >
            {memories.map((mem, i) => (
              <Card key={i}>
                <div
                  style={{
                    backgroundImage: `url(${mem.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                    borderRadius: "inherit",
                  }}
                  className="border-2 border-black"
                />
              </Card>
            ))}
          </CardSwap>
        </div>

        {/* Dynamic text panel */}
        <div className="flex flex-col justify-center max-w-lg  w-screeen">
          <div
            style={{
              transition: "opacity 0.3s ease, transform 0.3s ease",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
            }}
          >
            <span className="text-6xl lg:text-8xl font-black font-grotesk block">
              {active.title}.
            </span>
            <span className="mt-4 font-grotesk font-semibold block text-sm lg:text-base">
              {active.description}
            </span>
          </div>
          <button className="w-fit mt-5 px-1.5 py-0.5 border-2 font-semibold text-black cursor-pointer font-playfair">
            See detail
          </button>
        </div>

      </div>
    </div>
  );
};

export default Memories;
