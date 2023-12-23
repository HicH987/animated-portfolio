import { motion } from "framer-motion";
import SideMenu from "./SideMenu/SideMenu";

export default function NavBar() {
  return (
    <nav className="flex flex-row gap-0 h-[100px] items-center">
      <SideMenu />
      <div className="flex flex-row items-center justify-between w-full h-full m-auto max-w-[1366px]">
        <motion.h1
          className="text-lg font-bold text-white"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          HICH987 DEV
        </motion.h1>

        <ul className="flex flex-row gap-[20px]">
          <a href="">
            <img className="w-5" src="/facebook.png" alt="" />
          </a>
          <a href="">
            <img className="w-5" src="/instagram.png" alt="" />
          </a>
          <a href="">
            <img className="w-5" src="/youtube.png" alt="" />
          </a>
          <a href="">
            <img className="w-5" src="/dribbble.png" alt="" />
          </a>
        </ul>
      </div>
    </nav>
  );
}
