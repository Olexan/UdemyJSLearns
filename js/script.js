"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
    while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      let lastWatchFilm = prompt("Один из последних просмотренных фильмов?", ""),
        rating = prompt("На сколько оцените его?", "");
      if (
        lastWatchFilm != null &&
        lastWatchFilm != "" &&
        lastWatchFilm.length < 50 &&
        rating != null &&
        rating != ""
      ) {
        personalMovieDB.movies[lastWatchFilm] = rating;
        console.log("Done");
      } else {
        console.log("Error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка");
    }
  },
  showMyDB: function () {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}` , "");
      
      if ( genre === '' || genre == null) {
        console.log('Вы ввели неверные данные!!!');
        i--;
      } else {
        personalMovieDB.genres[i-1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Favorit ganre ${i+1} is ${item}`);
    });
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  }
};
