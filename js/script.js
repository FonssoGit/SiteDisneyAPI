const API_KEY = `363c5d1969f7741089a136755e8cf14b`
const INITIAL_MOVIE = ''
const BUTON_PLAY = ``
const LIST_MOVIES = [
    `tt3065204`,
    `tt5109280`,
    `tt2948372`,
    `tt2380307`,
    `tt0910970`,
]

function getURLmovie(movieId){
    return `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
}

//Script Principal renderizar filme inicial 


const movielista = document.getElementById('movie_list')


function setFeatureMovie(movieId){
    fetch(getURLmovie(movieId))
.then( response => response.json())
.then( data => {
    console.log(data)
    const title = document.querySelector('.movie h1')
    title.innerHTML = data.title

    const descricao = document.querySelector('.movie p')
    descricao.innerHTML = data.overview

    const rating = document.querySelector('.rating strong')
    rating.innerHTML = data.vote_average

    const infoDate = document.querySelector('.movie span')
    infoDate.innerHTML = data.release_date

    const infoGenero = document.querySelector('.movie h4')
    infoGenero.innerHTML = data.genres[0].name + ' - Movie'

    const app = document.getElementById('app')

    const image = `https://image.tmdb.org/t/p/original/${data.backdrop_path}`

    app.style.backgroundImage = `linear-gradient(90.18deg, #0d162ec2 26.21%, rgba(13,22,46,0.0001) 90.69%),url(${image})`
})
}

function creteButoCLickMovie(movieId){
    const button = document.createElement('button')
    button.setAttribute('onclick',`setFeatureMovie('${movieId}')`)
    button.innerHTML = `<i class="bi bi-play-circle-fill"></i>`
    return button

}
function createMovie(movieId){
    console.log('createMovie id',movieId)
    fetch(getURLmovie(movieId))
    .then( response => response.json())
    .then( data => {
        const movie = document.createElement('li')
        const genrre = `<span>${data.genres[0].name}</span>`
        const title = `<strong>${data.title}</strong>`

        const image = `https://image.tmdb.org/t/p/original/${data.backdrop_path}`
        movie.innerHTML = genrre + title 
        movie.appendChild(creteButoCLickMovie(movieId))
        movie.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.03),rgba(0,0,0,0.3)),url(${image})`

        movielista.appendChild(movie)

        //<li>
        //<span>Genero</span>
        //<strong>Sprite Untamed</strong>
        //<button type="button">
        //<i class="bi bi-play-circle-fill"></i>
        //</button>
        //</li>
    })
        
}

function loadListMovies(){
    LIST_MOVIES.map(createMovie)
}

loadListMovies()

setFeatureMovie(LIST_MOVIES[0])

