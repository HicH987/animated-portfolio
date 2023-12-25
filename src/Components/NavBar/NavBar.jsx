import { motion } from "framer-motion";
import SideMenu from "./SideMenu/SideMenu";
import { SocialMediasList } from "./SocialMediasList";

const socialMedias = [
  {
    name: "facebook",
    icon: "/facebook.png",
    url: "https://www.facebook.com/hich987",
  },
  {
    name: "instagram",
    icon: "/instagram.png",
    url: "https://www.instagram.com/hich987",
  },
  {
    name: "youtube",
    icon: "/youtube.png",
    url: "https://www.youtube.com/channel/UCc9W8o7gqQp9Pb2nQ7v2W2g",
  },
  {
    name: "dribbble",
    icon: "/dribbble.png",
    url: "https://dribbble.com/hich987",
  },
];
const links = ["HomePage", "Services", "Portfolio", "Contact"];

export default function NavBar() {
  return (
    <nav className="flex flex-row gap-0 h-[100px] items-center">
      <SideMenu links={links} />

      <div className="flex flex-row items-center justify-between w-full h-full m-auto max-w-[1366px]">
        <motion.h1
          className="text-lg text-white"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          HICH987 DEV
        </motion.h1>

        <SocialMediasList socialMedias={socialMedias} />
      </div>
    </nav>
  );
}
