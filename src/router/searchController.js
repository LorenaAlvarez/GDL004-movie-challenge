// antes era homecontent.js
export default () => {
  let randomWords = [
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
    "rabbit",
    "stranger",
    "city",
  ];
  let item = randomWords[Math.floor(Math.random() * randomWords.length)];
  showMovies(item);
    function showMovies(searchWord) {
        searchWord = searchWord.trim();
        fetch(`http://www.omdbapi.com/?s=${searchWord}&apikey=3b40ef2f`)
            .then(response => response.json())
            .then(data => {
                contentBox.innerHTML = ''
                if (data.Error) {
                    contentBox.innerHTML += ` <p class="lead">Error: ${data.Error}</p>`;
                    return;
                }
                let content = '<div class="row">';
                for (let movie of data.Search) {
                    let templateMovie = `
                    <div class="col-sm-12 col-lg-4">
                    <div class="card border-dark mb-3" id="cardsSearch" style="max-width: 100%;">
                        <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <p class="card-text">${movie.Year}</p>
                        <img src="${movie.Poster}" class="card-img-top">
                        <a href="https://www.netflix.com/mx-en/" type="button" id="btnWatch" class="btn btn-danger ">watch movie</a>
                        
                    </div>   
                    </div>
                    </div>
                        `;
                        content += templateMovie;

                }
                contentBox.innerHTML += content  + '</div>';
                });
              }
    let btnSearch = document.getElementById('btnSearch');
    btnSearch.addEventListener('click', function() {
        let inputText = document.getElementById('search').value;
        showMovies(inputText);
    });
};
