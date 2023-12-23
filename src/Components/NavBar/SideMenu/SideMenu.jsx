import { motion } from "framer-motion";
import { useRef, useState } from "react";
import useOutsideClick from "./../../../Hooks/useOutsideClick";
import { MenuToggle } from "./MenuToggle";
import { NavigationLinks } from "./NavigationLinks";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(20px at 40px 47px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function SideMenu() {
  const menuRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu =  () => isOpen && setIsOpen(false)
  useOutsideClick(menuRef,closeMenu);

  const links = ["HomePage", "Services", "Portfolio", "Contact"];

  return (
    <div className="flex items-center justify-center h-full p-10">
      <motion.div
        ref={menuRef}
        className="flex flex-col items-center justify-center text-black bg-white"
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div
          className="z-[999] fixed top-0 left-0 bottom-0 w-[300px] bg-white"
          variants={variants}
        >
          <NavigationLinks links={links} closeMenu={closeMenu}></NavigationLinks>
        </motion.div>

        <MenuToggle
          toggle={() => setIsOpen((prev) => !prev)}
          className={
            "z-[999] fixed top-[37px] left-[29px] text-3xl cursor-pointer"
          }
        />
      </motion.div>
    </div>
  );
}
