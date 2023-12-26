import { motion } from "framer-motion";
import { LeftSideHero } from "./LeftSideHero";
import { RightSideHero } from "./RightSideHero";

export default function Hero() {
  return (
    <main className="flex flex-row h-[calc(100vh-100px)] px-[5vw] overflow-hidden relative">
      <LeftSideHero className="z-10 flex-1" />
      <RightSideHero className="z-10 flex-1" />

      <div className="absolute bottom-[-120px] left-0 z-0">
        <motion.h1
          className="text-[50vh] opacity-50 font-bold text-[#ffffff1A] whitespace-nowrap"
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 5, repeatType: "mirror" }}
        >
          Portfolio Hero
        </motion.h1>
      </div>
    </main>
  );
}
