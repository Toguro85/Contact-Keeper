const express = require('express');
const router = express.Router();

//route Get /api/contacts
//description get all user contacts
//access Private

router.get('/', (req, res) => res.send('Get all contacts'));

//route post /api/contacts
//description add new contact
//access Private

router.post('/', (req, res) => res.send('Add contact'));

//route put /api/contacts/:id
//description update contact
//access Private

router.put('/:id', (req, res) => res.send('Update contact'));

//route delete /api/contacts/:id
//description delete contact
//access Private

router.delete('/:id', (req, res) => res.send('Delete contact'));

module.exports = router;
