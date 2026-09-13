import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import QRGenerator from "./components/pages/QRGenerator";
import QRScanner from "./components/pages/QRScanner";
import ScanResult from "./components/pages/ScanResult";
import Settings from "./components/pages/Settings";
import BottomNav from "./components/BottomNav";
import CreatedBy from "./components/common/CreatedBy";

function App() {
  return (
    <BrowserRouter>
      <div className="mx-auto relative min-h-screen bg-[#0B1120]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<QRGenerator />} />
          <Route path="/scan" element={<QRScanner />} />
          <Route path="/result" element={<ScanResult />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <CreatedBy/>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;