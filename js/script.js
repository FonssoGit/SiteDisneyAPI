fetch('https://api.themoviedb.org/3/movie/tt12801262?api_key=363c5d1969f7741089a136755e8cf14b')
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

    console.log(image)
    app.style.backgroundImage = `linear-gradient(90.18deg, #0d162ec2 26.21%, rgba(13,22,46,0.0001) 90.69%),url(${image})`
})