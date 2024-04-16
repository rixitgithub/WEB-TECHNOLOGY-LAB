document.addEventListener("DOMContentLoaded", function () {
  const model = new ShoppingListModel();
  const view = new ShoppingListView();
  const controller = new ShoppingListController(model, view);
});
