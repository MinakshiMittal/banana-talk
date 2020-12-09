var buttonTranslate = querySelector("#btn-translate");
var inputTextarea = querySelector("textarea");
var outputDiv = querySelector(".translating-div");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error occurred",error);
    alert("Something went wrong with the server! Try again after sometime.")
}

function clickHandler() {
    var inputText = inputTextarea.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json)
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })

    .catch (errorHandler)
};

buttonTranslate.addEventListener("click",clickHandler);

