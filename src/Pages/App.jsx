import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Specs from "./Specs";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/specs" element={<Specs />}/>
        <Route path="/contact" element={<ContactUs />}/>
        <Route path="/about" element={<AboutUs />}/>
      </Routes>
    </div>
  );
}

export default App;
