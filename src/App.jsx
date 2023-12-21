import NavBar from './Components/NavBar';
import "./global.css";

const App = () => {
  return (
    <div className="">
      <section className="h-screen">
        <NavBar/>
      </section>
      <section className="h-screen">Parallax</section>
      <section className="h-screen">Services</section>
      <section className="h-screen">Parallax</section>
      <section className="h-screen">Portfolio1</section>
      <section className="h-screen">Portfolio2</section>
      <section className="h-screen">Portfolio3</section>
      <section className="h-screen">Contact</section>
    </div>
  );
};

export default App;
