import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter basename="/the-ashville-steakhouse">
          <Navbar />
          <ScrollToTopButton />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
