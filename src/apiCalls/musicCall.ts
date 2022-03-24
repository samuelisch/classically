import axios from 'axios';

const baseUrl = 'https://api.openopus.org'

const searchMusic = async (str: string) => {
  const response = await axios.get(`${baseUrl}/omnisearch/${str}/0.json`)
  return response.data
}

const getAllComposers = async () => {
  const response = await axios.get(`${baseUrl}/composer/list/epoch/all.json`)
  return response.data
}

const getPopularComposers = async () => {
  const response = await axios.get(`${baseUrl}/composer/list/rec.json`);
  return response.data
}

const getComposer = async (name:string) => {
  const response = await axios.get(`${baseUrl}/composer/list/search/${name}.json`)
  return response.data
}

const getWorksFromComposerId = async (id:string) => {
  const response = await axios.get(`${baseUrl}/work/list/composer/${id}/all.json`)
  return response.data
}

const getWorkDetail = async (id:string) => {
  const response = await axios.get(`${baseUrl}/work/detail/${id}.json`)
  return response.data
}

const getRandomWorks = async () => {
  const response = await axios.post(`${baseUrl}/dyn/work/random/`)
  return response.data
}

const musicCall = {
  getAllComposers,
  getPopularComposers,
  getComposer,
  getWorksFromComposerId,
  searchMusic,
  getWorkDetail,
  getRandomWorks
}

export default musicCall