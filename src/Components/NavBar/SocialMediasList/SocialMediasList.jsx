import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const iconVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

export function SocialMediasList({ socialMedias }) {
  return (
    <motion.ul
      className="flex flex-row gap-[20px] mr-3"
      variants={variants}
      initial="closed"
      animate="open"
    >
      {socialMedias.map((socialMedia, i) => (
        <motion.a
          key={i}
          href={socialMedia.url}
          variants={iconVariants}

        >
          <img className="w-5" src={socialMedia.icon} alt={socialMedia.name} />
        </motion.a>
      ))}
    </motion.ul>
  );
}
