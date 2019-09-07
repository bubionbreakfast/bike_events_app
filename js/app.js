document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const readingListItem = createReadingListItem(event.target);
  const readingList = document.querySelector('#bike-list');
  readingList.appendChild(readingListItem);

  event.target.reset();
}

const createReadingListItem = function (form) {
  const readingListItem = document.createElement('li');
  readingListItem.classList.add('bike-list-item');

  const title = document.createElement('h2');
  title.textContent = form.make.value;
  readingListItem.appendChild(title);

  const author = document.createElement('h3');
  author.textContent = form.model.value;
  readingListItem.appendChild(author);

  const category = document.createElement('p');
  category.textContent = form.category.value;
  readingListItem.appendChild(category);

  return readingListItem;
}

const handleDeleteAllClick = function (event) {
  const readingList = document.querySelector('#bike-list');
  readingList.innerHTML = '';
}
