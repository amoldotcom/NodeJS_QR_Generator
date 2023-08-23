const qr = require("qrcode");

class qrAPI {
    static generateQR = async text => {
        // Let us convert the input stored in the url and return it as a representation of the QR Code image contained in the Data URI(Uniform Resource Identifier)
        // It shall be returned as a png image format
        // In case of an error, it will save the error inside the "err" variable and display it
        const qrCode = await qr.toDataURL(text);
        // console.log(qrCode);
        return qrCode;
    }
}

module.exports = { qrAPI };