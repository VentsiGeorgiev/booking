const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');

const { register, login, uploadImage, update } = require('../controllers/auth.js');

router.route('/register').post(register);
router.route('/login').post(login);
router.put('/update', upload.single('userImage'), uploadImage);
router.put('/update-user', update);



module.exports = router;