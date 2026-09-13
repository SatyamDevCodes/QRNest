import { useState } from "react";
import InputField from "../common/InputField";
import Button from "../common/Button";
import QRCodePreview from "../QRCodePreview";

const QRGenerator = () => {
  const [text, setText] = useState("");
  const [qrValue, setQrValue] = useState("");

  const handleGenerate = () => {
    if (text.trim()) {
      setQrValue(text);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white px-5 pt-8 pb-28">
      <h1 className="text-2xl font-bold mb-6">Generate QR Code</h1>

      <div className="space-y-5">
        <InputField
          label="Enter text or URL"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="https://example.com"
        />

        <Button onClick={handleGenerate} className="w-full">
          GENERATE QR CODE
        </Button>

        <div className="mt-8">
          <p className="text-sm text-gray-400 mb-3">QR Code Preview</p>
          <QRCodePreview qrValue={qrValue} />
        </div>

        {qrValue && (
          <div className="flex gap-3 mt-6">
            <Button variant="secondary" className="flex-1">
              Download
            </Button>
            <Button variant="secondary" className="flex-1">
              Share
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRGenerator;