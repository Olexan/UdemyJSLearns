/* Задание на урок:
 1) Первую часть задания повторить по уроку
 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
 false - выводит в консоль главный объект программы
 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
 "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
 genres
 P.S. Функции вызывать не обязательно */

 genres: [],
 privat: false
};
genres: [],
privat: false
};
    genres: [],
    privat: false
};= +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let k = 0; k < 2; k++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
                printf("Could not open file - %c \n", argv[1]);
                return 2;
                printf("Could not open file - %c \n", argv[1]);
                return 2;
            }
        
            // set array output
            char output[MAX];
            // read file in array
        printf("Could not open file - %c \n", argv[1]);
        return 2;
    }

    // set array output
    char output[MAX];
    // read file in array
    for (int i = 0; fgets(output, sizeof(output), fp)
        return 2;
        genres: [],
        privat: false
    };

    // set array output
    char output[MAX];
    // read file in array
    for (int i = 0; fgets(output, sizeof(output), fp)
            for (int i = 0; fgets(output, sizeof(output), fp)

        if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            k--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();