const baseUrl = "https://api.meaningcloud.com/sentiment-2.1"
const axios = require("axios")

analyse = async (url, key) => {
    console.log(url, key)
    analysis = await axios.get(`${baseUrl}?key=${key}&url=${url}&lang=en`)
        .then(function (res) {
            console.log(res.data)
            const  {code}  = res.data.status
            //handle errors
            if (code == 100) {
                const error = handleError(code, "invalid url, try google.com");
                return error
            } else if (code == 212) {
                const error = handleError(code, res.data.status.msg);
                return error
            }
            return response(res.data, code)
        })
    return analysis
}

const handleError = (code, msg) => {
    console.log('test')
    const error = {
        code: code,
        msg: msg
    }
    return error
}

//parsing the data
const response = (data, code) =>{
    const { score_tag, subjectivity, sentence_list } = data
            let result = {
                score_tag: score_tag,
                subjectivity: subjectivity,
                sentence_list: sentence_list
            }
            result = { result, status: code }
            return result
}

module.exports = {
    analyse
}