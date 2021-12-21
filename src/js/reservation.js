const imageSelector = document.querySelector('.image-reservation');
const titleSelector = document.querySelector('.reservation-title');
const nameSelector = document.querySelector('.name-movie');
const languageSelector = document.querySelector('.language');
const ratingSelector = document.querySelector('.rating');
const typeSelector = document.querySelector('.type');
const description = document.querySelector('.description-movie');
const modalReservation = document.querySelector('#modalreservation');
const closeButton = document.querySelector('.close-reservation');

export default class Reservation {
    static showModal = () => {
      modalReservation.classList.add('show', 'd-block');
      closeButton.addEventListener('click', () => {
        modalReservation.classList.remove('show', 'd-block');
      });
    }

    static modalShowInfo = (data) => {
      imageSelector.innerHTML = `<img src=${data.image.original} class="img-fluid" alt="">`;
      titleSelector.innerHTML = data.name;
      nameSelector.innerHTML = `Name: ${data.name}`;
      languageSelector.innerHTML = `Languague: ${data.language}`;
      ratingSelector.innerHTML = `Rating: ${data.rating.average}`;
      typeSelector.innerHTML = `Type: ${data.type}`;
      description.innerHTML = data.summary;
      Reservation.showModal(modalReservation);
    }
}