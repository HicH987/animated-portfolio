import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const iconVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 80 },
    },
  },
  closed: {
    x: -50,
    opacity: 0,
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
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <img className="w-5" src={socialMedia.icon} alt={socialMedia.name} />
        </motion.a>
      ))}
    </motion.ul>
  );
}
