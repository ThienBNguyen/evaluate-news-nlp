const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require('aylien_textapi');
// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY,
});
console.log(`Your API key is ${process.env.API_KEY}`);
const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
let projecData = {};
app.post('/api', function (req, res) {
    textapi.sentiment({ url: req.body.url, mode: document }, (error, res) => {
        if (error === null) {
            projectData = {
                polarity: res.polarity,
                subjectivity: res.subjectivity,
                text: res.text,
                polarity_confidence: res.polarity_confidence,
                subjectivity_confidence: res.subjectivity_confidence,
            };
            res.send(projecData);
            console.log(projecData)
        } else {
            console.log('error', error)
        }
    }
    )



})


// Sample response (JSON):
// {
//     "polarity":"positive",
//     "subjectivity":"subjective",
//     "text":"John is a very good football player",
//     "polarity_confidence":0.9999936601153382,
//     "subjectivity_confidence":0.9963778207617525
//   }