import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
  return (
    <nav className=" flex flex-row gap-10 h-[100px] items-center m-auto max-w-[1366px]">
      <div>
        <GiHamburgerMenu />
        <div className="hidden">
          <a href="">HomePage</a>
          <a href="">Services</a>
          <a href="">Portfolio</a>
          <a href="">Contact</a>
          <a href="">About</a>
        </div>
      </div>

      <h1 className="grow">HICH987 DEV</h1>

      <div className="flex flex-row gap-[20px]">
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
      </div>
    </nav>
  );
}
