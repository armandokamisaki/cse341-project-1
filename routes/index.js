const router = require('express').Router();

router.get('/', (req, res) => (res.send('HelloWorld')));
module.exports = router;