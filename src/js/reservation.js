const imageSelector = document.querySelector('.image-reservation');
const titleSelector = document.querySelector('.reservation-title');
const nameSelector = document.querySelector('.name-movie');
const languageSelector = document.querySelector('.language');
const ratingSelector = document.querySelector('.rating');
const typeSelector = document.querySelector('.type');
const description = document.querySelector('.description-movie');
const modalReservation = document.querySelector('#modalreservation');
const closeButton = document.querySelector('.close-reservation');
const reservationsSelector = document.querySelector('.reservations');

export default class Reservation {
    static showModal = () => {
      modalReservation.classList.add('show', 'd-block');
      closeButton.addEventListener('click', () => {
        modalReservation.classList.remove('show', 'd-block');
      });
    }

    static addReservation = (username, dateStart, dateEnd) => {
      reservationsSelector.insertAdjacentHTML('beforeend',
        `<p>${dateStart} - ${dateEnd} by ${username}</p>`);
    }

    static showReservations = (e) => {
      reservationsSelector.innerHTML = '';
      if (e === undefined) {
        return;
      }
      e.forEach((element) => {
        reservationsSelector.insertAdjacentHTML('beforeend',
          `<p>${element.date_start} - ${element.date_end} by ${element.username}</p>`);
      });
    }

    static modalShowInfo = async (data, e, idr) => {
      imageSelector.innerHTML = `<img src=${data.image.original} id='${idr}' class="img-fluid" alt="">`;
      titleSelector.innerHTML = data.name;
      nameSelector.innerHTML = `Name: ${data.name}`;
      languageSelector.innerHTML = `Languague: ${data.language}`;
      ratingSelector.innerHTML = `Rating: ${data.rating.average}`;
      typeSelector.innerHTML = `Type: ${data.type}`;
      description.innerHTML = data.summary;
      Reservation.showModal(modalReservation);
      Reservation.showReservations(e);
    }
}