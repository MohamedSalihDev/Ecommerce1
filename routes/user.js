const express = require('express')
const router = express.Router();
const {
    userByID } = require('../controllers/user')



router.param('userID', userByID)

router.get('/hello', requireSignin, (req, res) => {
    res.send('Hello there')
});

module.exports = router;