const inputBox = document.getElementById('input-box');
const submitButton = document.getElementById('submit-btn');
const itemList = document.getElementById('item-list');

submitButton.addEventListener('click', function() {
  const newItem = document.createElement('li');
  newItem.textContent = inputBox.value;
  itemList.appendChild(newItem);
  inputBox.value = '';
});
