import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Ongoing from "./pages/Ongoing";
import Upcoming from "./pages/Upcoming";
import Completed from "./pages/Completed";
import Sell from "./pages/Sell";
import Rent from "./pages/Rent";
import Advisor from "./pages/Advisor";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop /> 
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ongoing" element={<Ongoing />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/advisor" element={<Advisor />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;