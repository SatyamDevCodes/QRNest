import { useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [saveHistory, setSaveHistory] = useState(true);

  return (
    <div className="min-h-screen bg-[#0B1120] text-white px-5 pt-8 pb-28">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="space-y-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex justify-between items-center">
          <div>
            <p className="font-medium">Dark Mode</p>
            <p className="text-sm text-gray-400">Use dark theme throughout the app</p>
          </div>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="w-5 h-5 accent-purple-500"
          />
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex justify-between items-center">
          <div>
            <p className="font-medium">Save History</p>
            <p className="text-sm text-gray-400">Keep a history of scanned QR codes</p>
          </div>
          <input
            type="checkbox"
            checked={saveHistory}
            onChange={() => setSaveHistory(!saveHistory)}
            className="w-5 h-5 accent-purple-500"
          />
        </div>

        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4">
          <p className="font-medium text-red-400">Clear History</p>
          <p className="text-sm text-gray-400 mt-1">Remove all scanned and generated QR history.</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;