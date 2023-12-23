import Cursor from "@/Components/Cursor/Cursor";
import NavBar from "@/Components/NavBar/NavBar";
import "@/global.css";

const App = () => {
  return (
    <main>
      <Cursor />
      <section className="h-screen" id="HomePage">
        <NavBar />
      </section>
      <section className="h-screen" id="Services">
        Parallax
      </section>
      <section className="h-screen">Services</section>
      <section className="h-screen">Parallax</section>
      <section className="h-screen" id="Portfolio">
        Portfolio1
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
