import axios from 'axios';

const baseUrl = 'https://api.openopus.org'
const spotifyUrl = 'https://api.spotify.com/v1'

const getAllComposers = async () => {
  const response = await axios.get(`${baseUrl}/composer/list/epoch/all.json`)
  return response.data
}

const getPopularComposers = async () => {
  const response = await axios.get(`${baseUrl}/composer/list/pop.json`);
  return response.data
}

const getComposer = async (name:string) => {
  const response = await axios.get(`${baseUrl}/composer/list/search/${name}.json`)
  return response.data
}

const musicCall = {
  getAllComposers,
  getPopularComposers,
  getComposer
}

export default musicCall