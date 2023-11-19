let List = [];

async function getCities() {
  try {
    const buttenText = document.getElementById("get-city-button-text");
    buttenText.innerHTML = "Loading...";

    const response = await fetch(
      "https://countriesnow.space/api/v0.1/countries/population/cities"
    );
    const json = await response.json();
    List = json.data;
    console.log(json);
    renderTabele(json.data);

    buttenText.innerHTML = "get Button plus Icon";
  } catch (error) {
    console.log("amirrr", error);
  }
}

function renderTabele(lOND) {
  const table = document.getElementById("table-content");
  table.innerHTML = ""
  lOND.forEach((item) => {
    const tableRow = document.createElement("tr");
    tableRow.setAttribute("class", "mdc-data-table__row");

    const cityCall = document.createElement("td");
    cityCall.setAttribute(
      "class",
      "mdc-data-table__cell mdc-data-table__cell--numeric"
    );
    cityCall.innerHTML = item.city;
    tableRow.appendChild(cityCall);

    const countryCall = document.createElement("td");
    countryCall.setAttribute(
      "class",
      "mdc-data-table__cell mdc-data-table__cell--numeric"
    );
    countryCall.innerHTML = item.country;
    tableRow.appendChild(countryCall);

    table.appendChild(tableRow);
  });
}

document.getElementById("search-input").addEventListener("input", handlSearch);

function handlSearch(event) {
  const searchvalue = event.target.value;
  const filtring = List.filter((item) => {
    const result = item.city.search(searchvalue);
    if (result < 0) {
      return false;
    } else {
      return true;
    }
  });

  renderTabele(filtring);
}
