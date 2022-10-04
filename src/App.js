import { useState } from "react";
import Navbar from "./components/Navbar";
import './App.scss'
import Hero from "./components/Hero";
import { SliderData } from './data/SliderData'
import Dropdown from "./components/Dropdown";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <Navbar setMobileMenuOpen={setMobileMenuOpen} />
      <Dropdown mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero slides={SliderData} />
    </>
  );
}

export default App;
