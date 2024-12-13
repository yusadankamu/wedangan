import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Location from "./components/Location";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-brown-100">
      <Navbar />
      <div className="mb-4">
        <Hero />
        <About />
        <Menu />
        <Location />
      </div>
      <Footer />
    </div>
  );
}

export default App;
