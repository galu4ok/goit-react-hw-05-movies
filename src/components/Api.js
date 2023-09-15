import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c182bccb0f04ed3e706aad2e3b8d6eae';

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
});

export const getTrendingMovies = async () => {
  try {
    const response = await instance.get('/trending/movie/day');
    // console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
export const getMovieById = async movieId => {
  try {
    const response = await instance.get(`/movie/${movieId}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getMovieCredits = async movieId => {
  try {
    const response = await instance.get(`/movie/${movieId}/credits`);
    // console.log(response.data.cast);
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};
export const getMovieReviews = async movieId => {
  try {
    const response = await instance.get(`/movie/${movieId}/reviews`);
    // console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
export const getSearchMovies = async query => {
  try {
    const response = await instance.get('/search/movie', {
      params: {
        query,
      },
    });
    // console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
