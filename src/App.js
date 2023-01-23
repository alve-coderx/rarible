import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
