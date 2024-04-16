// Function to add item to the list
function addItem() {
  var itemInput = document.getElementById("itemInput");
  var item = itemInput.value.trim();

  if (item !== "") {
    var itemList = getItemList();
    itemList.push(item);
    saveItemList(itemList);
    renderItems();
    itemInput.value = ""; // Clear input field after adding
  }
}

// Function to retrieve the item list from localStorage
function getItemList() {
  var savedList = localStorage.getItem("shoppingList");
  return savedList ? JSON.parse(savedList) : [];
}

// Function to save the item list to localStorage
function saveItemList(list) {
  localStorage.setItem("shoppingList", JSON.stringify(list));
}

// Function to render items in the list
function renderItems() {
  var itemList = getItemList();
  var listContainer = document.getElementById("itemList");
  listContainer.innerHTML = ""; // Clear previous items

  itemList.forEach(function (item) {
    var listItem = document.createElement("li");
    listItem.textContent = item;
    listContainer.appendChild(listItem);
  });
}

// Function to update and display visit count
function updateVisitCount() {
  var count = localStorage.getItem("visitCount") || 0;
  count++;
  localStorage.setItem("visitCount", count);
  document.getElementById("visitCount").textContent = "Visits: " + count;
}

// Initialize the app
renderItems();
updateVisitCount();
