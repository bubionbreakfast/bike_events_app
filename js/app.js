document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const bikeListItem = createBikeListItem(event.target);
  const bikeList = document.querySelector('#bike-list');
  bikeList.appendChild(bikeListItem);

  event.target.reset();
}

const createBikeListItem = function (form) {
  const bikeListItem = document.createElement('li');
  bikeListItem.classList.add('bike-list-item');

  const make = document.createElement('h2');
  make.textContent = form.make.value;
  bikeListItem.appendChild(make);

  const model = document.createElement('h3');
  model.textContent = form.model.value;
  bikeListItem.appendChild(model);

  const category = document.createElement('p');
  category.textContent = form.category.value;
  bikeListItem.appendChild(category);

  const cooling = document.createElement('h4');
  cooling.textContent = form.cooling.value;
  bikeListItem.appendChild(cooling);

  function returnCoolingValue(cooling) {
  document.getElementById("result").value = cooling;
}

  return bikeListItem;
}

const handleDeleteAllClick = function (event) {
  const readingList = document.querySelector('#bike-list');
  readingList.innerHTML = '';
}
