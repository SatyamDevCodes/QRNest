import { useNavigate } from "react-router-dom";
import Card from "../common/Card";
import { QrCode, Scan } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="max-h-screen  bg-[#0B1120] text-white px-5 pt-10 pb-28">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">QR Code Tools</h1>
        <p className="text-gray-400 mt-2">Generate or scan QR codes quickly and securely.</p>
      </div>

      <div className="space-y-4">
        <Card onClick={() => navigate("/generate")} className="bg-gradient-to-r from-purple-600/20 to-purple-800/10">
          <div className="flex items-center gap-4">
            <div className="bg-purple-500/20 p-3 rounded-xl">
              <QrCode className="text-purple-400" size={28} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-purple-300">Generate QR</h2>
              <p className="text-sm text-gray-400">Create custom QR codes for any purpose.</p>
            </div>
          </div>
        </Card>

        <Card onClick={() => navigate("/scan")} className="bg-linear-to-r from-teal-600/20 to-teal-800/10">
          <div className="flex items-center gap-4">
            <div className="bg-teal-500/20 p-3 rounded-xl">
              <Scan className="text-teal-400" size={28} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-teal-300">Scan QR</h2>
              <p className="text-sm text-gray-400">Scan any QR code instantly with your camera.</p>
            </div>
          </div>
        </Card>
      </div>

      <p className="text-center text-gray-500 text-sm mt-10">
        Your data is private and secure.
      </p>
    </div>
  );
};

export default Home;