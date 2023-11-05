const router = require('express').Router();

router.get('/', (req, res) => (res.send('HelloWorld')));
router.use('/contacts', require('../contacts'));

module.exports = router;
