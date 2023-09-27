import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Moulin from "./pages/Moulin";
import Bergerie from "./pages/Bergerie";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accomodation-1" element={<Moulin />} />
        <Route path="/accomodation-2" element={<Bergerie />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
