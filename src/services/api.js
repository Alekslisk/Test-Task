import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export const getCharacters = () => api.get('/character');
export const getCharacter = (id) => api.get(`/character/${id}`);