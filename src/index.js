import "./scss/style.scss";

import APIHelper from "./js/APIHelper";
import Comment from "./comment.js";
import InvolvementAPIHelper from "./js/InvolvementAPIHelper";

const createCardForFilm = (film, numOfLikes) =>
  `
  <div class="card d-flex col-lg-3 col-md-5 col-10">
    <img src=${film.image.original} class="card-img-top w-100"
      alt="Show Image">
    <div class="card-body d-flex flex-column justify-content-between">
      <div class="d-flex justify-content-between align-items-center">
        <h5 class="card-title mt-2 h6">${film.name}</h5>
        <i class="far fa-heart text-danger"></i>
      </div>
      <div class="text-end">${numOfLikes}</div>
      <div class="d-flex flex-column gap-2 pt-2">
        <a class="btn btn-primary comment" data-id=${film.id}>Comments</a>
        <a class="btn btn-info reservation" data-id=${film.id}>Reservations</a>
      </div>

    </div>
  </div>`;

const filmsDiv = document.querySelector(".films");
APIHelper.getAll().then((films) => {
  filmsDiv.innerHTML = " ";
  InvolvementAPIHelper.getLikes().then((likes) => {
    films.forEach((film) => {
      let numOfLikes =
        likes.filter((like) => like.item_id === film.id)[0]?.likes || 0;
      filmsDiv.innerHTML += createCardForFilm(film, numOfLikes);
    });
    // InvolvementAPIHelper.postLikes(film.id);
  });

  const commentBtns = document.querySelectorAll(".comment");
  commentBtns.forEach((commentBtn) => {
    commentBtn.addEventListener("click", (e) => {
      const showId = e.target.dataset.id;
      APIHelper.getDetails(showId).then((data) => {
        console.log(data);
      });
    });
  });

  const reservationBtns = document.querySelectorAll(".reservation");
  reservationBtns.forEach((reservationBtn) => {
    reservationBtn.addEventListener("click", (e) => {
      APIHelper.getDetails(e.target.dataset.id).then((data) => {
        console.log(data);
      });
    });
  });
});

const btnComment = document.querySelectorAll("#comments");

btnComment.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    Comment.showModal(e);
  });
});
