async function getCities() {
  try {
    const buttenText = document.getElementById("get-city-button-text");
    buttenText.innerHTML = "Loading...";

    const response = await fetch(
      "https://countriesnow.space/api/v0.1/countries/population/cities"
    );
    const json = await response.json();

    buttenText.innerHTML = "get Button plus Icon";
    console.log(json.data);
    

    const table = document.getElementById("table-content")


    json.data.slice(0,10).forEach((item) => {
      const tableRow = document.createElement("tr");
      tableRow.setAttribute("class", "mdc-data-table__row");

      const cityCall = document.createElement("td");
      cityCall.setAttribute("class","mdc-data-table__cell mdc-data-table__cell--numeric"
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

      table.appendChild(tableRow)
    });
  } catch (error) {
    console.log("amirrr", error);
  }
}
