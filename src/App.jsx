import Cursor from "@/Components/Cursor/Cursor";
import Hero from "@/Components/Hero/Hero";
import NavBar from "@/Components/NavBar/NavBar";
import Parallax from "@/Components/Parallax/Parallax";
import Services from "@/Components/Services/Services";
import "@/global.css";

const App = () => {
  return (
    <main className="flex flex-col">
      <Cursor />

      <section className="h-screen" id="HomePage">
        <NavBar />
        <Hero />
      </section>

      <section className="h-screen" id="Services">
        <Parallax type={"services"} />
      </section>
      <section className="h-screen">
        <Services />
      </section>
      <section className="h-screen">
        <Parallax />
      </section>
      <section className="h-screen" id="Portfolio">
        Portfolio 1
      </section>
      <section className="h-screen">Portfolio2</section>
      <section className="h-screen">Portfolio3</section>
      <section className="h-screen" id="Contact">
        Contact
      </section>
    </main>
  );
};

export default App;
