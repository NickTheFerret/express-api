const express = require('express');
let router = express.Router();

router.get('/:id’', function (req, res) {
    res.json(data)
});

router.post('/’', function (req, res) {

    res.json(id);
});

router.put('/:id’', function (req, res) {

    res.sendStatus(200);
});
router.delete('/:id’', function (req, res) {

    res.sendStatus(200);
});


module.exports = router;