import { LeftSideHero } from "./LeftSideHero";
import { RightSideHero } from "./RightSideHero";
export default function Hero() {
  return (
    <main className="flex flex-row h-[calc(100vh-100px)] px-[5vw]">
      <LeftSideHero className="flex-1" />
      <RightSideHero className="flex-1" />
    </main>
  );
}
