import Navbar from "./components/home/Navbar";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}
