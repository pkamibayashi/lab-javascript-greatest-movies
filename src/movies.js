// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directorNames = moviesArray.map((element) => element.director);

  return directorNames;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevenDrama = moviesArray.filter(
    (element) =>
      element.genre.includes("Drama") && element.director === "Steven Spielberg"
  );

  return stevenDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let faltaNota = moviesArray.map(
    (movies) => (movies.score === undefined ? { ...movies, score: 0 } : movies) // isso é um IF abreviado
  );
  let total = faltaNota.map((moviesArray) => moviesArray.score);
  let result = total.reduce(
    (valorAnterior, quemSoma) => valorAnterior + quemSoma,
    0
  );
  let resultado = result / moviesArray.length;

  return Number(resultado.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((movies) =>
    movies.genre.includes("Drama")
  );
  let scoreArray = dramaMovies.map((movies) => movies.score);
  if (scoreArray.length === 0) return 0;
  let sumScore = scoreArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  let length = scoreArray.length;
  let sumAvg = sumScore / length;
  return Number(sumAvg.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  // criei um array novo para nao modificar o array original com o metodo sort()
  let sortedArr = [...moviesArray];

  // Aqui estou comparando o ano de laçamento dos filmes
  sortedArr.sort((a, b) => {
    // Se o ano de lançamento for o mesmo, comparo o titulo dos dois filmes
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      // Se o ano de lançamento, comparo o ano de lançamento
      return a.year - b.year;
    }
  });

  return sortedArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let movieNames = moviesArray.map((movies) => movies.title);
  let order = movieNames.sort();
  let topTwenty = order.slice(0, 20);
  return topTwenty;
}
orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
