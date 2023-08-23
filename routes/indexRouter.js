const express = require('express');
const app = express();

const router = express.Router();

const { indexController } = require('../controllers/indexController.js')

router.route('/')
    .get(indexController.indexGET)
    .post(indexController.indexPOST);

router.get('/show/:id',indexController.indexShowQR);
router.get('/delete/:id',indexController.indexDeleteQR);

module.exports = router;