/*
"use strict";
const number = 25;
console.log(`You number - ${number}`);  Интерполяция строк
*/
const numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '');

const personalMovieDB = { 
    count: numberOfFilms,
    movies: {},
    actors: {}, 
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотреных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a !='' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count <= 10){
    console.log('malo');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
    console.log('good');
} else if (personalMovieDB.count >= 30){
    console.log('monster');
} else {
    console.log('none'); 
}
console.log(personalMovieDB);