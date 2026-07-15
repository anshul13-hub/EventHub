const QRCode = require("qrcode");

const generateQRCode = async (text) => {
  try {
    const qr = await QRCode.toDataURL(text);
    return qr;
  } catch (error) {
    throw error;
  }
};

module.exports = generateQRCode;