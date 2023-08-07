// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener('DOMContentLoaded', () => {
  console.log('local JS imported successfully!');
});

function changeCity() {
  const success = (position) => {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
  };

  navigator.geolocation.getCurrentPosition(success);
}

document.getElementById('main-form').addEventListener('submit', changeCity);

const gemInfoContainer = document.getElementById('gem-info-container');
