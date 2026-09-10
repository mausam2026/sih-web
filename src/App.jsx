import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Navbar from "./assets/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import RotatingMoon from "./components/RotatingMoon";

import Pipeline from "./components/Pipeline";
import Sensors from "./components/Sensors";
import Metrics from "./components/Metrics";
import AnalysisPage from "./pages/AnalysisPage";

function Layout() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <RotatingMoon />
      
      <Pipeline />
      <Sensors />
      <Metrics />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;