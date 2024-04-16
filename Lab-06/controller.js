class ShoppingListController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.form = document.getElementById("shoppingForm");
    this.form.addEventListener("submit", this.handleFormSubmit.bind(this));

    this.view.shoppingTableBody.addEventListener(
      "change",
      this.handleCheckboxChange.bind(this)
    );
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const itemName = document.getElementById("itemName").value;
    const quantity = document.getElementById("quantity").value;
    const priority = document.getElementById("priority").value;
    const category = document.getElementById("category").value;

    const newItem = new ShoppingItem(itemName, quantity, priority, category);
    this.model.addItem(newItem);
    this.view.renderShoppingItem(newItem, this.model.getItems().length - 1);

    this.form.reset();
  }

  handleCheckboxChange(event) {
    if (event.target.classList.contains("removeCheckbox")) {
      const index = event.target.dataset.index;
      this.model.removeItem(index);
      this.view.removeShoppingItem(index);
    }
  }
}
