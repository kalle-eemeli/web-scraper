const axios = require("axios")
const cheerio = require("cheerio")
const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

const url = 'https://gameranx.com/updates/'

const articles = []

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)

        /*
            Look for the dates and titles of each article
            as well as their respective links
        */
        $('.post-content', html).each(function(){
            const date = $(this).find('time').text()
            const title = $(this).find('h2').text()
            const url = $(this).find('a').attr('href')
            articles.push({
                date,
                title,
                url
            })
        })
        console.log(articles)
    }).catch(error => console.log(err))

app.listen(8000, () => console.log(`server running on PORT 8000`))

/*
    Return the list of articles scraped as a JSON object
*/
app.get('/news', function(req, res){
    res.send(articles.slice(0, 6))
})