import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      // x: { type: "linear", duration: 0.8, },
      y: { type: "spring", stiffness: 60 },
    },
  },
  closed: {
    y: -500,
    opacity: 0,
  },
};

export function RightSideHero({ className }) {
  return (
    <motion.div
      className={`${className}`}
      variants={variants}
      initial="closed"
      animate="open"
    >
      <img
        className="object-cover h-full overflow-visible "
        src="/hero_hich.png"
        alt="hicham diab"
      />
    </motion.div>
  );
}
