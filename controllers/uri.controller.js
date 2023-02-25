let urlObj = {}
require('dotenv').config()
const PORT =  process.env.PORT || 5000

const shortenUrl = (req, res) => {
   

    let original_url = req.body.url
     
    if (original_url) {
        
        let shortUrlCode = Math.ceil(Math.random() * 1000).toString(30)
        urlObj['original_url'] = req.body.url
        urlObj['shorturl'] = `http://localhost:${PORT}/${shortUrlCode}`

        return res.status(201).render('uri',{urlObj})
    }
    res.status(404).json({message:"request object is empty"})
}


const visitShortUrl = (req, res) => {
    let { short_url_code } = req.params

    let url = urlObj['shorturl']
    if (url) {
        let uri = urlObj['original_url']
       return  res.redirect(uri)
    }
    res.status(404).json({message:"no url found"})

}

module.exports = {
    shortenUrl,
    visitShortUrl
}