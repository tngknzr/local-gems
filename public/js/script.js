// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener('DOMContentLoaded', () => {
  console.log('local JS imported successfully!');
});

const popUp = document.getElementById('pop-up');
const popUpClose = document.getElementById('pop-up-close');
const heartIcon = document.getElementById('heart-icon');
const body = document.getElementById('body');
const overlay = document.querySelector('.overlay');
const mobileBarBtn = document.getElementById('mobile-bar');
const mobileBarMenu = document.querySelector('.mobile-menu');
const mobileCloseBtn = document.getElementById('mobile-close');
const mobileCloseMenu = document.querySelector('.mobile-close');
const navUl = document.getElementById('nav-ul');
const navBarContainer = document.getElementById('nav-bar');

function clickMobileBar() {
  mobileBarMenu.classList.toggle('active');
  mobileCloseMenu.classList.toggle('active');
  navUl.classList.toggle('active');
  if (navUl.style.display === 'block') {
    navUl.style.display = 'none';
  } else {
    navUl.style.display = 'block';
  }
}
mobileBarBtn.addEventListener('click', clickMobileBar);
mobileCloseBtn.addEventListener('click', clickMobileBar);

fetch('/userInSession')
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    const userInSession = data.userInSession;
    const heartIcons = document.getElementsByClassName('heart-icon');
    for (let i = 0; i < heartIcons.length; i++) {
      heartIcons[i].addEventListener('click', clickHeart);
    }
    function clickHeart(event) {
      if (userInSession) {
        event.target.classList.toggle('active');
        return;
      }
      popUp.style.display = 'block';
      popUpClose.style.display = 'block';
      body.classList.toggle('active');
      overlay.classList.toggle('active');
    }
  })
  .catch((error) => console.log('Error:', error));

function closePopUp() {
  popUpClose.style.display = 'none';
  popUp.style.display = 'none';
  body.classList.remove('active');
  overlay.classList.remove('active');
}
popUpClose.addEventListener('click', closePopUp);
