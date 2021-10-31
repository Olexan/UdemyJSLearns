"use strict";

/* 1. Создать переменную numberOfFilms и в неё поместить ответ от пользователя  */
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

/* 2. Создать объект personalMovieDB и в него поместить свойства */
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

/* 3. Задайте пользователю по два раза вопросы */
let lastWatchFilm1 = prompt("Один из последних просмотренных фильмов?", ""),
  rating1 = prompt("На сколько оцените его?", ""),
  lastWatchFilm2 = prompt("Один из последних просмотренных фильмов?", ""),
  rating2 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastWatchFilm1] = rating1;
personalMovieDB.movies[lastWatchFilm2] = rating2;

console.log(personalMovieDB);
