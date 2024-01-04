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
  const responStyles = {
    container:"max-hero-md:pt-2 max-hero-md:text-center max-hero-md:space-y-2 max-hero-md:relative",
    text: "max-hero-md:space-y-0 max-hero-md:justify-between max-hero-md:h-[90%]",
    h1: "max-hero-md:bg-[#161636] max-hero-md:bg-opacity-40 max-hero-md:rounded-md",
    buttons: "max-hero-md:justify-between max-hero-md:p-5",
    buttonContact: "max-hero-md:text-white max-hero-md:bg-purple-800",
    scrollIcon: "max-hero-md:absolute max-hero-md:top-1/3",
  };

  return (
    <motion.div
      className={`flex flex-col space-y-12 pt-28 ${className} ${responStyles.container}`}
      variants={variants}
      initial="closed"
      animate="open"
    >
      {/* -------Text------- */}
      <motion.div
        className={`flex flex-col space-y-[7vw] font-semibold ${responStyles.text}`}
        variants={itemVariants}
      >
        <h1 className={`flex text-3xl text-slate-300 ${responStyles.h1}`}>
          <motion.span
            initial={{ rotate: 0, scale: 1 }}
            animate={{
              rotate: [20, -20, 20, -20, 0],
              scale: [1, 1.2, 1, 1.2, 1],
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
          className={`text-7xl text-slate-300 ${responStyles.h1}`}
          style={{
            fontSize: " clamp(2.5rem, 1.5rem + 4vw, 4.5rem)",
          }}
        >
          Web developer <br /> and UI designer
        </h1>
      </motion.div>

      {/* -------Buttons------- */}
      <motion.div
        className={`flex flex-row space-x-10  ${responStyles.buttons}`}
        variants={itemVariants}
      >
        <motion.button
          className="px-6 py-2 text-white bg-purple-800 rounded-md"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          Hire me
        </motion.button>
        <motion.button
          className={`px-6 py-2 text-purple-800 border border-purple-800 rounded-md ${responStyles.buttonContact}`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact me
        </motion.button>
      </motion.div>

      {/* -------Scroll Down icon------- */}
      <motion.div
        className={`flex items-center justify-center w-14 ${responStyles.scrollIcon}`}
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
