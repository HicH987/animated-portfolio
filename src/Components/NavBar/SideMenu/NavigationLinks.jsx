import { motion } from "framer-motion";
import { Link } from "react-scroll";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const linkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export function NavigationLinks({ links, closeMenu }) {
  return (
    <motion.ul
      className="flex flex-col items-center justify-center gap-10 mt-[70%]"
      variants={variants}
    >
      {links.map((link, i) => (
        <motion.li
          key={i}
          className="text-3xl cursor-pointer"
          variants={linkVariants}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
        >
          <Link
            onClick={closeMenu}
            activeClass="active"
            to={link}
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset to match your navigation bar height
            duration={500}
          >
            {link}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}
