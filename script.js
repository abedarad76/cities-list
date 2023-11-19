async function getCities() {
  try {
    const buttenText = document.getElementById("get-city-button-text");
    buttenText.innerHTML = "Loading...";

    const response = await fetch(
      "https://countriesnow.space/api/v0.1/countries/population/cities"
    );
    const json = await response.json();

    buttenText.innerHTML = "get Button plus Icon";
    console.log(json);
  } catch (error) {
    console.log("amirrr", error);
  }
}
