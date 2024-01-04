import { motion } from "framer-motion";
import { LeftSideHero } from "./LeftSideHero";
import { RightSideHero } from "./RightSideHero";

// const starVariants = {
//   hidden: { opacity: 0.5, scale: 0.5 },
//   visible: {
//     opacity: 1,
//     scale: 0.9,
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//       repeatType: "mirror",
//       delay: 2,
//     },
//   },
// };

export default function Hero() {
  // const stars = new Array(200).fill(null);

  return (
    <main className="flex flex-row h-[calc(100vh-100px)] px-[5vw] overflow-hidden relative max-hero-md:px-0">
      {/* {stars.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          variants={starVariants}
          initial="hidden"
          animate="visible"
        />
      ))} */}
      <LeftSideHero className="z-10 flex-1 max-hero-md:bg-[url('/hero_hich.png')] bg-cover bg-center" />
      <RightSideHero className="z-10 flex-1 max-hero-md:hidden" />

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
