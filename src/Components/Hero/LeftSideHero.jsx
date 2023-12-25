import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};
const itemVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      // x: { type: "linear", duration: 0.8, },
      x: { type: "spring", stiffness: 60 },
    },
  },
  closed: {
    x: -500,
    opacity: 0,
  },
};

export function LeftSideHero({ className }) {
  return (
    <motion.div
      className={`flex flex-col space-y-12 pt-28 ${className}`}
      variants={variants}
      initial="closed"
      animate="open"
    >
      <motion.div
        className="flex flex-col space-y-[7vw] font-semibold"
        variants={itemVariants}
      >
        <h1 className="flex text-3xl text-slate-300">
          <motion.span
            initial={{ rotate: 0,   }}
            animate={{
              rotate: [20, -20, 20, -20, 0],
            }}
            transition={{
              type: "linear",
              repeat: Infinity,
              duration: 0.9,
              repeatDelay: 3,
            }}
          >
            👋
          </motion.span>
          <span>&nbsp; Hello, I&apos;m &nbsp;</span>
          <b className="text-purple-800">HICHAM DIAB </b>
        </h1>
        <h1
          className="text-7xl text-slate-300"
          style={{
            fontSize: " clamp(2.5rem, 1.5rem + 4vw, 4.5rem)",
          }}
        >
          Web developer <br /> and UI designer
        </h1>
      </motion.div>

      <motion.div className="flex flex-row space-x-10" variants={itemVariants}>
        <button className="px-6 py-2 text-white bg-purple-800 rounded-md">
          Hire me
        </button>
        <button className="px-6 py-2 text-purple-800 border border-purple-800 rounded-md">
          Contact me
        </button>
      </motion.div>

      <motion.div
        className="flex items-center justify-center w-14"
        variants={itemVariants}
      >
        <motion.img
          src="scroll.png"
          initial={{ y: 0, opacity: 0.8 }}
          animate={{ y: 50, opacity: 0 }}
          transition={{
            type: "linear",
            repeat: Infinity,
            duration: 3,
            repeatDelay: 2,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
