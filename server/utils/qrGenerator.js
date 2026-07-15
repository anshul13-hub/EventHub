const QRCode = require("qrcode");

const generateQRCode = async (text) => {
  try {
    const qrImage = await QRCode.toDataURL(text);

    return qrImage;
  } catch (error) {
    throw new Error("QR Code generation failed");
  }
};

module.exports = generateQRCode;