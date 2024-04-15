import { Hero } from "./components/hero";
import { Invitation } from "./components/invite";
import { Navbar } from "./components/navbar";
import "./output.css";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Invitation />
      </div>
    </>
  );
}

export default App;
