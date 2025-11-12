import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Layout from "./components/layout";
import Franchise from "./pages/Franchise";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          Franchise
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/franchise" element={<Franchise />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
