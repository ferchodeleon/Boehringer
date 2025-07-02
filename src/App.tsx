import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Home } from "./Pages/Home";
import Memory from "./Pages/Memory";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memory" element={<Memory />} />
          {/* <Route path="/stands" element={<InteractiveMap />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
