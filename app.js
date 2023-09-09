var inputMsg = document.querySelector("#input-fun");
var outputMsg = document.querySelector("#output-fun");
var button = document.querySelector("#button-fun");
var url = "https://api.funtranslations.com/translate/";
var selectedValue = null;

// character selector
// Get the select element
const selectElement = document.getElementById('options');
// Add an event listener to the select element
selectElement.addEventListener('change', function () {
  // Update the selectedValue when the selected option changes
  selectedValue = this.value;
  // Update the content of the "selectedOption" span
  document.getElementById('selectedOption').textContent = selectedValue;
});




function errorHandler(error) {
  console.log("error occured", error);
  alert(
    "There appears to be an issue with the server. Please consider exploring alternative options or attempting the operation again at a later time."
  );
}

function linkToSend(input) {
  return url + selectedValue + ".json?text=" + input.value;
}

function getTranslation() {
  fetch(linkToSend(inputMsg))
    .then((response) => response.json())
    .then((json) => {
      outputMsg.innerText = json.contents.translated;
    })
    .catch(errorHandler);
}

button.addEventListener("click", getTranslation);
