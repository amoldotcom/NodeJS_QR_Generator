const { qrModel } = require('../models/qrModel.js')

// Print all docs
// Insert new doc
// Get Latest Doc or 1st Doc
// Delete Doc By ID
// Find Doc By ID

const getAllDoc = async () => {
    const allDocs = await qrModel.find();
    return allDocs;
}

const createDoc = async (dataObj) => {
    const countDoc = await qrModel.find({ url: dataObj.url }).count();
    if (countDoc > 0) {
        return 'Already Present in the DB!!!';
    }
    const qrDoc = new qrModel(dataObj);
    const result = await qrDoc.save();
    return result;
}

const latestDoc = async () => {
    const docCount = await qrModel.find().count() || 0;

    if (docCount <= 0) {
        return '';
    }
    const result = await qrModel.findOne();
    return result.qrCode;
}

const deleteDocById = async (id) => {
    return await qrModel.findByIdAndDelete(id);
}

const findDocById = async (id) => {
    const result = await qrModel.findById(id);
    return result.qrCode;
}

module.exports = {
    getAllDoc, createDoc, deleteDocById, latestDoc, findDocById,
}