import axios from "axios";
//calling the VALIDU function to use after sumission
const { VALID } = require("./urlChecker");

const input = document.getElementById("url");

//handle input change
document.addEventListener('DOMContentLoaded', function () {
    input.addEventListener("change", (e)=>{
        e.preventDefault()
        hideError()
        showResults(false)
    })
}
)

// handle the submit
async function submitChecker(e) {
    e.preventDefault();

    const form = document.querySelector("form");
    if (!VALID(input.value)) {
        showError();
        document.getElementById("error").innerHTML = "Please, Enter a valid URL";
        input.value = "";
        return;
    }
    const { data } = await axios.post(
        'http://localhost:8081/',
        form,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    display_results(data);
}

//showing the data on the ui
const display_results = data => {

    if (data.msg) {
        showError()
        showResults(false)
        document.getElementById("error").innerHTML = `${data.msg}`;

        return;
    }
    hideError()
    showResults(true)
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.result.subjectivity}`;
    document.getElementById("textSnippet").innerHTML = `Text Snipper: ${data.result.sentence_list[0].text}`;
    document.getElementById("polarity").innerHTML = `Polarity: ${data.result.score_tag}`;
}

const showResults = (bool) => {
    if (bool) {
        document.querySelectorAll("ul li").forEach(element => {
            element.style.display = "block"
        })
        return;
    }
    document.querySelectorAll("ul li").forEach(element => {
        element.style.display = "none"
    })
    return;
}

const showError = () => document.getElementById("error").style.display = "block";
const hideError = () => document.getElementById("error").style.display = "none";

export { submitChecker }