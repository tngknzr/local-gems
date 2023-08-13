// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener('DOMContentLoaded', () => {
  console.log('local JS imported successfully!');
});

const popUp = document.getElementById('pop-up');
const popUpClose = document.getElementById('pop-up-close');
const heartIcon = document.getElementById('heart-icon');
const body = document.getElementById('body');
const overlay = document.querySelector('.overlay');

function closePopUp() {
  popUpClose.style.display = 'none';
  popUp.style.display = 'none';
}
popUpClose.addEventListener('click', closePopUp);

fetch('/userInSession')
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const userInSession = data.userInSession;
    function clickHeart(event) {
      if (userInSession) {
        event.target.classList.toggle('active');
        console.log('works');
        return;
      }
      console.log('click heart works');
      popUp.style.display = 'block';
      popUpClose.style.display = 'block';
      body.classList.toggle('active');
      overlay.classList.toggle('active');
    }

    const heartIcons = document.getElementsByClassName('heart-icon');
    for (let i = 0; i < heartIcons.length; i++) {
      heartIcons[i].addEventListener('click', clickHeart);
    }
  })
  .catch((error) => console.log('Error:', error));

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
