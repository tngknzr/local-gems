// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener('DOMContentLoaded', () => {
  console.log('local JS imported successfully!');
});

function clickHeart() {
  popUp.style.display = 'block';
  popUpClose.style.display = 'block';
}

function closePopUp() {
  popUpClose.style.display = 'none';
  popUp.style.display = 'none';
}

const popUp = document.getElementById('pop-up');

const popUpClose = document.getElementById('pop-up-close');

const heartIcon = document.getElementById('heart-icon');
const heartIcons = document.getElementsByClassName('heart-icon');
for (let i = 0; i < heartIcons.length; i++) {
  heartIcons[i].addEventListener('click', clickHeart);
}

heartIcon.addEventListener('click', clickHeart);
popUpClose.addEventListener('click', closePopUp);

// const popUpForm = document.getElementById('pop-up-form');
// popUpForm.addEventListener('click', function (event) {
//   event.stopPropagation();
// });

// function changeCity() {
//   const success = (position) => {
//     console.log(position);
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     console.log(latitude, longitude);
//   };

//   navigator.geolocation.getCurrentPosition(success);
// }

// document.getElementById('main-form').addEventListener('submit', changeCity);

// const gemInfoContainer = document.getElementById('gem-info-container');
