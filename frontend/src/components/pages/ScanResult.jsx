import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, ExternalLink, Copy, Share2 } from "lucide-react";
import Button from "../common/Button";

const ScanResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.data || "No data found";

  const isURL = data.startsWith("http://") || data.startsWith("https://");

  const handleCopy = () => {
    navigator.clipboard.writeText(data);
    alert("Copied to clipboard!");
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Scanned QR Code",
        text: data,
      });
    } else {
      handleCopy();
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white px-5 pt-10 pb-28">
      <div className="flex flex-col items-center text-center">
        <div className="bg-teal-500/20 p-4 rounded-full mb-4">
          <CheckCircle className="text-teal-400" size={48} />
        </div>

        <h1 className="text-2xl font-bold">Scan Successful</h1>
        <p className="text-gray-400 mt-2">Content detected</p>

        <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 mt-8 text-left">
          <p className="text-sm text-gray-400 mb-1">Scanned Content</p>
          <p className="text-white break-all text-sm">{data}</p>
        </div>

        <div className="w-full space-y-3 mt-8">
          {isURL && (
            <Button
              className="w-full flex items-center justify-center gap-2"
              onClick={() => window.open(data, "_blank")}
            >
              <ExternalLink size={18} />
              Open in Browser
            </Button>
          )}

          <div className="flex gap-3">
            <Button
              variant="secondary"
              className="flex-1 flex items-center justify-center gap-2"
              onClick={handleCopy}
            >
              <Copy size={16} />
              Copy
            </Button>
            <Button
              variant="secondary"
              className="flex-1 flex items-center justify-center gap-2"
              onClick={handleShare}
            >
              <Share2 size={16} />
              Share
            </Button>
          </div>

          <Button
            variant="secondary"
            className="w-full mt-2"
            onClick={() => navigate("/scan")}
          >
            Scan Again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ScanResult;