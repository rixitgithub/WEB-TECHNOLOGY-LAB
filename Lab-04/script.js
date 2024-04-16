document.getElementById("changeButton").addEventListener("click", function () {
  document.body.style.backgroundColor = "lightgreen";
  document.getElementById("heading").style.color = "red";
  document.getElementById("heading").style.fontSize = "48pt";
  document.getElementById("heading").innerText = "New Heading Text";
  document
    .getElementById("heading")
    .insertAdjacentHTML("afterend", "<button>Click Me</button>");
  document
    .querySelector("button:last-of-type")
    .addEventListener("click", function () {
      alert("New button clicked!");
    });
});
