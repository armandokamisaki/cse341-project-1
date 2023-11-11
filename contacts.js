const express = require('express');
const router = express.Router();

const contactsController = require('./controllers/contacts');

router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getSingle);

router.post('/', contactsController.createUser);
router.put('/:id', contactsController.updateUser);
router.delete('/:id', contactsController.deleteUser);

module.exports = router;