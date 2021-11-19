// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  
 /*  const movieDirectors = movies.map((arrayMovies) => {
    return arrayMovies.director
  })
  return movieDirectors */

return movies.map(movies => movies.director)

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  if (!movies.length) return 0
  /* return  movies.filter((arraySteven) =>{
    movies.director === "Steven Spielberg" && movies.genre.includes('Drama').length

  })
   return stevenSpielberg.length
    */
  return movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length



}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(scoreAvg) {
  const result = movies.reduce((acc, scores) => {
    return acc + scores.score / movies.length
  },0)
  return result.toFixed(2) //on codepen it displays the correct amount, but not here?

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  
  const dramaM = movies.filter(movie => movie.genre.includes('Drama'))

  if (movies.genre !== "Drama") return 0
  
  const dramaResult = movies.reduce((dramaAcc, dramaValue) =>{
      return dramaAcc + dramaValue.score / movies.length
    },0)

    return dramaResult.toFixed(2) 


 

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const byYear1 = movies.map(movies => movies)
  const byYear2 = byYear1.sort((newer, older) => {
   return  newer.year - older.year 
  })
return byYear2

/* const byYear1 = movies.map(movies => movies).sort((newer, older) => {
   return  newer.year - older.year 
  })
return byYear1 */


}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const alphaOrder = movies.map(movies => movies.title).sort()
  //when we leave .sort() it automatically should alphabetize the array
  return alphaOrder.slice(0, 20) // for only the first 20 indexes, 
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
