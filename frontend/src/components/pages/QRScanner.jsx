import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Html5Qrcode } from "html5-qrcode";
import { Camera, Upload, X } from "lucide-react";
import Button from "../common/Button";

const QRScanner = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("camera"); // "camera" | "upload"
  const [scanning, setScanning] = useState(false);
  const [error, setError] = useState("");
  const scannerRef = useRef(null);
  const fileInputRef = useRef(null);

  // Camera start
  const startCamera = async () => {
    try {
      setError("");
      setScanning(true);

      const scanner = new Html5Qrcode("reader");
      scannerRef.current = scanner;

      await scanner.start(
        { facingMode: "environment" }, // back camera
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
        },
        (decodedText) => {
          // QR successfully scanned
          stopCamera();
          navigate("/result", { state: { data: decodedText } });
        },
        (errorMessage) => {
          // ignore continuous scan errors
        }
      );
    } catch (err) {
      console.error(err);
      setError("Camera access nahi mil paya. Permission check karo.");
      setScanning(false);
    }
  };

  // Camera stop
  const stopCamera = async () => {
    if (scannerRef.current) {
      try {
        await scannerRef.current.stop();
        scannerRef.current.clear();
      } catch (err) {
        console.log(err);
      }
      scannerRef.current = null;
    }
    setScanning(false);
  };

  // File Upload se scan
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setError("");
      const scanner = new Html5Qrcode("reader");
      const result = await scanner.scanFile(file, true); // true = show image

      navigate("/result", { state: { data: result } });
    } catch (err) {
      console.error(err);
      setError("Is image me koi valid QR code nahi mila.");
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1120] text-white px-5 pt-8 pb-28">
      <h1 className="text-2xl font-bold mb-6">Scan QR Code</h1>
      <div className="items-center justify-center flex px-6 min-h-50 max-w-50 border-2 border-dashed border-gray-500 mx-auto mb-7 rounded-2xl">
        <p className="text-3xl font-bold opacity-30 text-center">QR Code Scanner</p>
      </div>

      {/* Mode Switcher */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => {
            stopCamera();
            setMode("camera");
          }}
          className={`flex-1 py-3 rounded-xl flex items-center justify-center gap-2 transition ${
            mode === "camera"
              ? "bg-purple-600 text-white"
              : "bg-white/10 text-gray-300"
          }`}
        >
          <Camera size={18} />
          Camera
        </button>

        <button
          onClick={() => {
            stopCamera();
            setMode("upload");
          }}
          className={`flex-1 py-3 rounded-xl flex items-center justify-center gap-2 transition ${
            mode === "upload"
              ? "bg-teal-600 text-white"
              : "bg-white/10 text-gray-300"
          }`}
        >
          <Upload size={18} />
          Upload
        </button>
      </div>

      {/* Camera Mode */}
      {mode === "camera" && (
        <div className="flex flex-col items-center">
          <div
            id="reader"
            className="w-full max-w-sm rounded-2xl overflow-hidden bg-black"
          ></div>

          <div className="mt-6 w-full space-y-3">
            {!scanning ? (
              <Button onClick={startCamera} className="w-full">
                Start Camera
              </Button>
            ) : (
              <Button onClick={stopCamera} variant="danger" className="w-full">
                Stop Camera
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Upload Mode */}
      {mode === "upload" && (
        <div className="flex flex-col items-center">
          <div
            onClick={() => fileInputRef.current.click()}
            className="w-full max-w-sm h-64 border-2 border-dashed border-white/20 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-teal-500 transition"
          >
            <Upload size={40} className="text-gray-400 mb-3" />
            <p className="text-gray-300">Click to upload QR image</p>
            <p className="text-sm text-gray-500 mt-1">PNG, JPG, JPEG</p>
          </div>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
          />

          {/* Hidden div needed by library */}
          <div id="reader" className="hidden"></div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center">
          {error}
        </div>
      )}

      <p className="text-center text-gray-500 text-sm mt-8">
        Point camera at QR code or upload an image
      </p>
    </div>
  );
};

export default QRScanner;