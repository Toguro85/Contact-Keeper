const express = require('express');
const router = express.Router();

//route post /api/users
//description register
//access public

router.post('/', (req, res) => res.send('register user'));

module.exports = router;
