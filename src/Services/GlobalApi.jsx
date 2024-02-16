import axios from "axios";

const moviesBaseUrl = 'https://api.themoviedb.org/3';
const api_key = '503efe8d84a723c8873dd7c6ae4cd68f';

const getTrendingVideos = axios.get(`${moviesBaseUrl}/trending/all/day?api_key=${api_key}`);

export default { getTrendingVideos };
