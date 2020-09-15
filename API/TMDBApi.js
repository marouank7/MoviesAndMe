// import axios from 'axios'
// const API_TOKEN = "4a2ac6b804001d7a092fae28d9546053"

// export function getFilmsFromApiWithSearchedText (text) {
//     //const url = 'https://api.themoviedb.org/3/movie/550?api_key=ff0e57f87d1fa045bd18884993ed9705'
//     console.log("je suis dans getFilmsFromApiWithSearchedText")
//     const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
//     return axios.get(url)
//         .then((reponse) => {
//             reponse.json()
//             console.log("response", reponse.data.results)
//         })
//         .catch((error) => console.log("error fetch",error))
// }

const API_TOKEN = "4a2ac6b804001d7a092fae28d9546053";

export function getFilmsFromApiWithSearchedText (text, page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + page
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}
