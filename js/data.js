$(document).ready(() => {
  fetch("../../data.json")
    .then((response) => response.json())
    .then((data) => {
      $("#main-logo-area").attr("src", data.logo[0]);
    });
});
