const form = document.getElementById("shoppingForm");
const tableBody = document.getElementById("shoppingTableBody");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const itemName = document.getElementById("itemName").value;
  const quantity = document.getElementById("quantity").value;
  const priority = document.getElementById("priority").value;
  const category = document.getElementById("category").value;

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td><input type="checkbox" class="removeCheckbox"></td>
        <td>${itemName}</td>
        <td>${quantity}</td>
        <td>${priority}</td>
        <td>${category}</td>
      `;
  tableBody.appendChild(newRow);

  form.reset();
});

tableBody.addEventListener("change", function (event) {
  if (event.target.classList.contains("removeCheckbox")) {
    const checkbox = event.target;
    if (checkbox.checked) {
      const rowToRemove = checkbox.parentNode.parentNode;
      rowToRemove.remove();
    }
  }
});
