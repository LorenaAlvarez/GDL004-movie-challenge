export default () => {
  let movieArray = [
    "cat",
    "dog",
    "soccer",
    "black",
    "spy",
    "run",
    "play",
    "friend",
    "war",
    "christmas",
    "winter",
    "summer",
    "heroes",
    "thor",
    "stranger",
    "city",
    "captain",
    "soldier",
    "new",
    "cube",
    "fall",
    "21",
    "old",
    "the",
  ];
  let randomNumber = Math.floor(Math.random() * movieArray.length - 1) + 1;
  let randomMovie = movieArray[randomNumber];

  const random = async () => {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=d033b518&t=" + encodeURI(randomMovie)
    );
    const movie = await response.json();
    return movie;
  };

  random().then((movie) => {
    let randomTemplate = `
    <div class="card border-danger mb-3 cars" style="max-width:100%;">

    <div class="card-body">
      <h4 class="text-danger">${movie.Title}</h4>
      <p class="card-text">${movie.Runtime} | ${movie.Year} | ${movie.Rated}</p>
      <img src="${movie.Poster}"   id='moviePoster' class="card-img-top"/>
      <p>${movie.Plot}</p>
      <p class="card-text"><strong>Genre: </strong>${movie.Genre}</p>
      <p class="card-text"><strong>Director: </strong>${movie.Director}</p>
      <p class="card-text"><strong>Stars: </strong>${movie.Actors}</p>
      <a href="https://www.netflix.com/mx-en/" class="btn btn-danger btnWatchMovie">Watch movie</a>
      <a href="#/home"class="btn btn-outline-secondary btnL">𐠪</a>
    </div>


    `;
    movieCard.innerHTML = randomTemplate;
  });
};
