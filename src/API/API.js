import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const KEY = "cae3be8cdf5c9c2351403518efd2a643";

export const trendingMovieFetch = () => {
  const trendingGet = "/trending/movie/week";
  return axios
    .get(`${BASE_URL}${trendingGet}`, {
      params: {
        api_key: KEY,
      },
    })
    .then((res) => res.data.results);
  // .then(console.log);
};

export const searchMovieApi = (searchQuery) => {
  const searchUrl = "/search/movie";
  return axios.get(`${BASE_URL}${searchUrl}`, {
    params: {
      api_key: KEY,
      query: searchQuery,
      page: 1,
    },
  });
};

export const searchMovieById = (movieId) => {
  const searchUrl = "/movie/";
  return axios
    .get(`${BASE_URL}${searchUrl}${movieId}`, {
      params: {
        api_key: KEY,
      },
    })
    .then((res) => res.data);
};

export const searchCreditsMovie = (movieId) => {
  const searchUrl = "/movie/";
  const lastUrl = "/credits";
  return axios
    .get(`${BASE_URL}${searchUrl}${movieId}${lastUrl}`, {
      params: {
        api_key: KEY,
      },
    })
    .then((res) => res.data.cast);
  // .then(console.log)
};

export const searchReviewsMovie = (movieId) => {
  const searchUrl = "/movie/";
  const lastUrl = "/reviews";
  return axios
    .get(`${BASE_URL}${searchUrl}${movieId}${lastUrl}`, {
      params: {
        api_key: KEY,
      },
    })
    .then((res) => res.data.results);
  // .then(console.log)
};
