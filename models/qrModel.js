const mongoose = require('mongoose');

// Defining Schema
const qrSchema = new mongoose.Schema({
    url: { type: String, required: true, trim: true },
    qrCode: { type: String, required: true, trim: true },
});

// Creating Model or Compiling Schema
// Connected DB will be used automatically
const qrModel = mongoose.model('qrCode', qrSchema);

module.exports = { qrModel }; // Import this is in controller