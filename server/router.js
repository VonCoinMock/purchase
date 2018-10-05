const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Serving GET /')
    res.status(200).send();
});

module.exports = router;