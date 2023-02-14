async function getCountryAndItsNeighbours(code) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://restcountries.com/v3.1/alpha/" + code,
      success: function (result) {
        resolve(result);
      },
      error: function (data) {
        reject(error);
      }
    });
  })

}

async function callAjax() {
  const codeInput = document.getElementById("codeInput");
  let result = await getCountryAndItsNeighbours(codeInput.value);

  const data = result[0];
  document.getElementById("countryName").innerHTML = data.name.official;
  let neighboursUnorderedList = document.getElementById("neighbours");
  
  for (let i = 0; i < data.borders.length; i++) {
    let newListElement = document.createElement("li");
    let newHrefElement = document.createElement("a");

    var resultForBorder = await getAjaxForBorder(data.borders[i]);
    newHrefElement.href = "https://en.wikipedia.org/wiki/" + resultForBorder[0].name.common.replaceAll(" ", "_");
    newHrefElement.innerHTML = data.borders[i]; //it can be also resultForBorder[0].name.official;
    newListElement.appendChild(newHrefElement);
    neighboursUnorderedList.appendChild(newListElement);
  }

  document.getElementById("result").style.display = "block";
}

async function getAjaxForBorder(borderCode) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://restcountries.com/v3.1/alpha/" + borderCode,
      success: function (result) {
        resolve(result);
      },
      error: function (data) {
        reject(error);
      }
    });
  });
}