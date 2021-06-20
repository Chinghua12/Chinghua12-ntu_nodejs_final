let express = require('express');
let router = express.Router();
let Chinghua = require('./Chinghua.js');
let Jean = require('./Jean.js');
let Summer = require('./Summer.js');
router.get('/', (req, res) => {
    let options = {
        root: __dirname,
        dotfiles: 'deny'
    }
    res.sendFile("index.html", options)
})
router.use('/Chinghua', Chinghua);
router.use('/Jean', Jean);
router.use('/Summer', Summer);

module.exports = router;