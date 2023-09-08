var inputMsg = document.querySelector("#input-fun");
var outputMsg = document.querySelector("#output-fun");
var button = document.querySelector("#button-fun");
var url = "https://api.funtranslations.com/translate/"
var selectedValue = null;



// character selector
  // Get all radio buttons with the name "options"
  const radioButtons = document.querySelectorAll('input[name="options"]');

  // Add an event listener to each radio button
  radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', function() {
          // Update the selectedValue when a radio button is changed
          selectedValue = this.value;
          // Update the content of the "selectedOption" span
          document.getElementById('selectedOption').textContent = selectedValue;
          console.log(selectedValue)
      });
  });
  
function errorHandler(error){
    console.log("error occured", error);
    alert("Something Wrong with server Try other option or Try again Later");
}

function linkToSend(input){
    return url + selectedValue + ".json?text=" + input.value;
}

function getTranslation() {
    fetch(linkToSend(inputMsg)).then(response => response.json()).then(json => {
        outputMsg.innerText = json.contents.translated;
    }).catch(errorHandler)
}

button.addEventListener("click", getTranslation);