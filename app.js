var buttonTranslate = document.querySelector("#button");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.getElementById("output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"
//var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text

}

function errorHandler(error) {
    console.log("Error Occured", error);
    alert("Oops! Something went wrong, please try again later");
}


function clickHandler() {
   var inputText = txtInput.value; //taking input
   //calling server for processing
   fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
};

buttonTranslate.addEventListener("click", clickHandler);

