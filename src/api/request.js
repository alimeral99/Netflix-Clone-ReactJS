const API_KEY = "1b98a04e01d6e5f887b3aac71756c58e";

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=40`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=40`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=40`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=40`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=40`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=40`,
};
export default request;
