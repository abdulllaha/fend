const dotenv = require('dotenv');
const express = require('express')
const cors = require("cors")
const { analyse } = require("./analyse");

dotenv.config();
const app = express()
app.use(cors())

const  API_KEY = process.env.API_KEY;
const port = 8081

app.use(express.static('dist'));
app.use(express.json())
app.get('/', function (req, res) {
    res.sendFile('../../dist/index.html');
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
console.log(`app listening on port ! ${port}`)
})

app.post("/", async (req, res) => {
    // 1. get the url from the request body
    const url = req.body.url;
    // 2. fetching data from meanCloud
    const Analyse = await analyse(url, API_KEY);
    const {code, msg, result} = Analyse;
    //errors
    if (code == 212) {
        return res.send({ msg: msg , code: code});
    }
    else if (code == 100) {
        return res.send({ msg: msg, code: code });
    }

    return res.send({result: result, code: code});

});
