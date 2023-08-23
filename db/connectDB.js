const mongoose = require('mongoose');

const connectDB = async (DB_URL) => {
    try {
        const options = {
            dbName: 'qrCode',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
        await mongoose.connect(DB_URL, options);
        console.log("MongoDB Connection Successful!!!");

    } catch (error) {
        console.log(error);
    }
}

module.exports = { connectDB };