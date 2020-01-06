const express = require('express');
const router = express.Router();

//route Get /api/auth
//description get logged in user
//access Private

router.get('/', (req, res) => res.send('Get logged in user'));

//route post /api/auth
//description auth user get token
//access Public

router.post('/', (req, res) => res.send('Get logged in user'));

module.exports = router;
