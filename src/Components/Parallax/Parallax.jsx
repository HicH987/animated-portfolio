import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Parallax({ type }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const useYBg = (maxOutputRange) =>
    useTransform(scrollYProgress, [0, 1], ["0%", maxOutputRange]);

  return (
    <main
      ref={ref}
      className="relative flex items-center justify-center w-full h-full overflow-hidden"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1
        className="z-20 font-bold text-[20vh] text-slate-300"
        style={{ y: yText }}
      >
        {type === "Services" ? "What I Do" : "What I Did"}
      </motion.h1>

      <motion.div
        className="absolute z-30 w-full h-full bg-bottom bg-cover"
        style={{ backgroundImage: "url('/mountains.png')" }}
      />
      <motion.div
        className="absolute z-10 w-full h-full bg-bottom bg-cover"
        style={{
          y: useYBg("100%"),
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      />
      <motion.div
        className="absolute z-0 w-full h-full bg-bottom bg-cover"
        style={{
          backgroundImage: "url('/stars.png')",
          y: useYBg("80%"),
        }}
      />
    </main>
  );
}
