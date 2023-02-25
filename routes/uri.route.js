const { shortenUrl, visitShortUrl } = require('../controllers/uri.controller')

const express = require('express')
const router = express.Router()

router.post('/shortern_url', shortenUrl)

router.get('/:short_url_code', visitShortUrl)

module.exports = router