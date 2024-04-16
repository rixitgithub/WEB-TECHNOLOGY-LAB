class ShoppingListView {
  constructor() {
    this.shoppingTableBody = document.getElementById("shoppingTableBody");
  }

  renderShoppingItem(item, index) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${index + 1}</td>
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>${item.priority}</td>
        <td>${item.category}</td>
        <td><input type="checkbox" class="removeCheckbox" data-index="${index}"></td>
      `;
    this.shoppingTableBody.appendChild(newRow);
  }

  removeShoppingItem(index) {
    this.shoppingTableBody.removeChild(
      this.shoppingTableBody.childNodes[index]
    );
  }
}
