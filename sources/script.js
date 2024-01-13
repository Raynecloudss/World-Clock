function updateTime() {
  //Chicago
  let chicagoElement = document.querySelector("#chicago");
  let chicagoElementTime = chicagoElement.querySelector(".time");
  let chicagoElementDate = chicagoElement.querySelector(".date");
  let chicagoTime = moment().tz("America/Chicago");

  chicagoElementDate.innerHTML = moment().format("MMM Do YYYY");
  chicagoElementTime.innerHTML = `${chicagoTime.format(
    "h:mm:ss"
  )}<small>${chicagoTime.format("A")}</small>`;

  //Paris
  let parisElement = document.querySelector("#paris");
  let parisElementTime = parisElement.querySelector(".time");
  let parisElementDate = parisElement.querySelector(".date");
  let parisTime = moment().tz("Europe/Paris");

  parisElementDate.innerHTML = moment().format("MMM Do YYYY");
  parisElementTime.innerHTML = `${parisTime.format(
    "h:mm:ss"
  )}<small>${parisTime.format("A")}</small>`;
}

updateTime();
setInterval(updateTime, 1000);
