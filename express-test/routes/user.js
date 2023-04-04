const express = require('express')
const router = express.Router()


router.get('/user-profile', (req, res) => {
    res.send('user-profile')
})

router.get('/user-image', (req, res) => {
    res.send('user-image')
})

router.get('/card', (req, res) => {
    res.send('card')
})



module.exports = router