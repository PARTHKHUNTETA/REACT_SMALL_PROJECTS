import React, { useState } from "react";
import QRCode from "react-qr-code";
const index = () => {
  const [value, setValue] = useState("");
  const [qrValue, setQRvalue] = useState("");

  function generateQRCode() {
    setQRvalue(value);
    setValue("");
  }
  return (
    <div>
      <h2>QR code Generator</h2>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <br />
      <button
        disabled={value && value.trim() !== "" ? false : true}
        onClick={generateQRCode}
      >
        Generate a QR Code
      </button>
      <br />
      <br />

      <QRCode size={300} value={qrValue} />
    </div>
  );
};

export default index;
