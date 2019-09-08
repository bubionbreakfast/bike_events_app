document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

  const titleTextChange = document.querySelector('title');
  titleTextChange.addEventListener('onmouseover', handleChangeTitle);



  const changeTitle = document.querySelector('list-title-text');
  changeTitle.addEventListener('mouseover', mouseOver);

  function mouseOver() {
    document.getElementById("list-title-text");
    const changeTitle = document.createElement('list-title-text');
    changeTitle.textContent = 'Add your Bike To the List';
    changeTitle.appendChild(titleTextChange)
  }
  function mouseOut() {
    document.getElementById("list-title-text").style.color = "black";
  }

// const myAlert = document.querySelector('title');
// // myAlert.addEventListener('onclick', myAlert);
// const function = myAlertFunction() {
//   alert('Add a new Bike to the list');
// };


// };



})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const bikeListItem = createBikeListItem(event.target);
  const bikeList = document.querySelector('#bike-list');
  bikeList.appendChild(bikeListItem);

  function thanks (handleNewItemFormSubmit){
    alert('You have entered your bike thank you')
  };

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

//   function returnCoolingValue(cooling) {
//   document.getElementById("result").value = cooling;
// }
window.alert('You have added a Bike');

  return bikeListItem;

}

const handleDeleteAllClick = function (event) {
  const readingList = document.querySelector('#bike-list');
  readingList.innerHTML = '';
}


const handleChangeTitle = function (event) {
  const changeTitle = document.createElement('p');
  changeTitle.textContent = 'Add your Bike To the List';
  handleChangeTitle.appendChild(changeTitle);
  console.log(event);
};

function mouseOut() {
  document.getElementById("title").style.color = "black";
};
