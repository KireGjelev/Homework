let colorInput = document.getElementById("color");
let fontSizeInput = document.getElementById("fontSize");
let itemInput = document.getElementById("items");

let buttonForAdding = document.getElementById("generator");
let result = document.getElementById("result");

buttonForAdding.addEventListener("click", function() {
    let colorValue = colorInput.value;
    let fontSizeValue = fontSizeInput.value;
    let itemValue = itemInput.value;

    let items = itemValue.split(",");

    for (let i = 0; i < items.length; i++) {
        let newItem = document.createElement("h1");
        newItem.innerHTML = items[i];
        newItem.style.color = colorValue;
        newItem.style.fontSize = parseInt(fontSizeValue) + "px";

        result.appendChild(newItem);
    }

});