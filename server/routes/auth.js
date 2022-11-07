const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');

const { register, login, update, updateUser } = require('../controllers/auth.js');

router.route('/register').post(register);
router.route('/login').post(login);
router.put('/update', upload.single('userImage'), update);
router.put('/update-user', updateUser);



module.exports = router;