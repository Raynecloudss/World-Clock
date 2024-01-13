//Chicago
let chicagoElement = document.querySelector("#chicago");
let chicagoElementTime = chicagoElement.querySelector(".time");
let chicagoElementDate = chicagoElement.querySelector(".date");
let chicagoTime = moment();

chicagoElementDate.innerHTML = moment().format("MMM Do YYYY");
chicagoElementTime.innerHTML = `${chicagoTime.format(
  "h:mm:ss"
)}<small>${chicagoTime.format("A")}</small>`;
