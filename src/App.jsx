import Cursor from "@/Components/Cursor/Cursor";
import Hero from "@/Components/Hero/Hero";
import NavBar from "@/Components/NavBar/NavBar";
import Parallax from "@/Components/Parallax/Parallax";
import Portfolio from "@/Components/Portfolio/Portfolio";
import Services from "@/Components/Services/Services";
import "@/global.css";

const App = () => {
  const sectionStyle = "h-screen snap-center";

  return (
    <main className="flex flex-col">
      <Cursor />

      <section className={`${sectionStyle}`} id="HomePage">
        <NavBar />
        <Hero />
      </section>

      <section className={`${sectionStyle}`} id="Services">
        <Parallax type={"services"} />
      </section>

      <section className={`${sectionStyle}`}>
        <Services />
      </section>

      <section className={`${sectionStyle}`}>
        <Parallax />
      </section>

      <section id="Portfolio">
        <Portfolio sectionStyle={sectionStyle} />
      </section>

      <section className={`${sectionStyle}`} id="Contact">
        Contact
      </section>
    </main>
  );
};

export default App;
