import { useState } from "react";
import type { ReactNode } from "react";

const HoverMe = ({ children, text }: { children: ReactNode; text: string }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  return (
    <div
      className=""
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onMouseMove={(e) => setPos({ x: e.clientX + 1, y: e.clientY + 12 })}
    >
      {children}
      {show && (
        <div
          className="fixed z-50 cursor-pointer pointer-events-none
                     bg-white text-primary text-sm px-3 py-1 rounded-md"
          style={{ left: pos.x, top: pos.y }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default HoverMe;
