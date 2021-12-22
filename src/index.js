import './scss/style.scss';

import APIHelper from './js/APIHelper.js';
import Comment from './comment.js';
import InvolvementAPIHelper from './js/InvolvementAPIHelper.js';
import Reservation from './js/reservation.js';

const createCardForFilm = (film, numOfLikes) => `
  <div class="card d-flex col-lg-3 col-md-5 col-10">
    <img src=${film.image.original} class="card-img-top w-100"
      alt="Show Image">
    <div class="card-body d-flex flex-column justify-content-between">
      <div class="d-flex justify-content-between align-items-center">
        <h5 class="card-title mt-2 h6">${film.name}</h5>
        <i class="far fa-heart text-danger like-btn" data-id=${film.id}></i>

      </div>
      <div class="text-end like-number">${numOfLikes}</div>
      <div class="d-flex flex-column gap-2 pt-2">
        <a class="btn btn-primary comment" data-id=${film.id}>Comments</a>
        <a class="btn btn-info reservation" data-id=${film.id}>Reservations</a>
      </div>

    </div>
  </div>`;

const displayShows = async () => {
  const showsDiv = document.querySelector('.films');

  const shows = await APIHelper.getAll();

  showsDiv.innerHTML = '';
  const likes = await InvolvementAPIHelper.getLikes();

  shows.forEach((show) => {
    const numOfLikes = likes.filter((like) => like.item_id === show.id)[0]?.likes || 0;
    showsDiv.innerHTML += createCardForFilm(show, numOfLikes);
  });

  const commentBtns = document.querySelectorAll('.comment');
  commentBtns.forEach((commentBtn) => {
    commentBtn.addEventListener('click', (e) => {
      const showId = e.target.dataset.id;
      APIHelper.getDetails(showId).then((data) => {
        Comment.showModal();
        Comment.closeModal();
        Comment.showImage(data.image.original);
        Comment.showName(data.name);
        Comment.showInfo(data);
      });
    });
  });

  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    Comment.addComment();
  });

  const reservationBtns = document.querySelectorAll('.reservation');
  reservationBtns.forEach((reservationBtn) => {
    reservationBtn.addEventListener('click', (e) => {
      const idR = e.target.dataset.id;
      InvolvementAPIHelper.getReservations(idR).then((e) => {
        APIHelper.getDetails(idR).then((data) => {
          Reservation.modalShowInfo(data, e, idR);
        });
      });
      const btnAdd = document.querySelector('.reservation-button');

      btnAdd.addEventListener('click', () => {
        const startDate = document.querySelector('#start');
        const endDate = document.querySelector('#end');
        const nameDate = document.querySelector('#your_name');
        const { id } = document.querySelector('#modalreservation img');
        if (startDate.value !== '' && endDate.value !== '' && startDate.value !== '') {
          InvolvementAPIHelper.postReservation(id, nameDate.value, startDate.value, endDate.value);
          Reservation.addReservation(nameDate.value, startDate.value, endDate.value);
          startDate.value = '';
          endDate.value = '';
          nameDate.value = '';
        }
      });
    });
  });

  const likeBtns = document.querySelectorAll('.like-btn');
  likeBtns.forEach((likeBtn) => {
    likeBtn.addEventListener('click', (e) => {
      const showId = parseInt(e.target.dataset.id, 10);
      InvolvementAPIHelper.postLikes(showId);
      const likeNumberDiv = e.target.parentNode.parentNode.querySelector('.like-number');
      likeNumberDiv.innerHTML = parseInt(likeNumberDiv.innerHTML, 10) + 1;
    });
  });
};

displayShows();
