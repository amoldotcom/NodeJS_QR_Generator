const { qrAPI } = require('../services/qrAPI.js');
const { getAllDoc, createDoc, deleteDocById, latestDoc, findDocById } = require('../services/crudDB.js');
class indexController {
    static indexGET = async (req, res) => {
        try {
            const data = { title: 'QR Code Generator', qr: '', } // Using external obj can casuse issue with the ejs.
            const latestQR = await latestDoc();
            const allDocs = await getAllDoc();
            res.render('index', { title: 'QR Code Generator', qr: latestQR, item: allDocs });
        } catch (error) {
            console.log(error);
        }
    }
    static indexPOST = async (req, res) => {
        try {
            // console.log(req.body.url);
            const result = await qrAPI.generateQR(req.body.url);
            const inputObj = {
                url: req.body.url,
                qrCode: result,
            }
            const insertResult = await createDoc(inputObj);
            const allDocs = await getAllDoc();
            res.render('index', { title: 'QR Code Generator', qr: result, item: allDocs });


        } catch (error) {
            console.log(error);
        }
    }

    static indexDeleteQR = async (req, res) => {
        try {
            const latestQR = await latestDoc();
            const result = await deleteDocById(req.params.id);
            res.redirect('/');
        } catch (error) {
            console.log(error);
        }
    }

    static indexShowQR = async (req, res) => {
        try {
            const currentQR = await findDocById(req.params.id);
            const allDocs = await getAllDoc();
            res.render('index', { title: 'QR Code Generator', qr: currentQR, item: allDocs });

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = { indexController };