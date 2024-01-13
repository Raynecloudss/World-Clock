function updateTime() {
  //Chicago
  let chicagoElement = document.querySelector("#chicago");
  if (chicagoElement) {
    let chicagoElementTime = chicagoElement.querySelector(".time");
    let chicagoElementDate = chicagoElement.querySelector(".date");
    let chicagoTime = moment().tz("America/Chicago");

    chicagoElementDate.innerHTML = moment().format("MMM Do YYYY");
    chicagoElementTime.innerHTML = `${chicagoTime.format(
      "h:mm:ss"
    )}<small>${chicagoTime.format("A")}</small>`;
  }

  //Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisElementTime = parisElement.querySelector(".time");
    let parisElementDate = parisElement.querySelector(".date");
    let parisTime = moment().tz("Europe/Paris");

    parisElementDate.innerHTML = moment().format("MMM Do YYYY");
    parisElementTime.innerHTML = `${parisTime.format(
      "h:mm:ss"
    )}<small>${parisTime.format("A")}</small>`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
      <div class="city">
      <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
            </div>
            `;
}

updateTime();
setInterval(updateTime, 1000);
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
