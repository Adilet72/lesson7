
const api_url = 'https://api.sampleapis.com/movies/';

const movies = document.querySelector('.movies')
const buttons = document.querySelectorAll('#btns button')
// console.log("buttons: ", buttons);



buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn.innerText);
        movies.innerHTML = `<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`
        fetchMovies(btn.innerText)
    })
})


function fetchMovies(genre = 'animation'){
    fetch(api_url + genre)
    .then( (response) => {
        console.log(response, '----response----');
        return response.json()
    })
    .then( (movieDate) => {
        console.log(movieDate,'----response----');
        renderCard(movieDate)
    })
}
fetchMovies()


function renderCard(arr = []){
    movies.innerHTML = arr.map( (film) => {
        return`
        <div class="card" style="width: 18rem;">
            <img src="${film.posterURL}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${film.little} </h5>
            </div>
        </div>`
    })
}