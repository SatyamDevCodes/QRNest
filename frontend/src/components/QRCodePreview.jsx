const QRCodePreview = ({ qrValue }) => {
  return (
    <div className="bg-white rounded-2xl p-6 flex justify-center items-center shadow-xl">
      {qrValue ? (
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrValue)}`}
          alt="QR Code"
          className="w-48 h-48"
        />
      ) : (
        <div className="w-48 h-48 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
          QR Preview
        </div>
      )}
    </div>
  );
};

export default QRCodePreview;