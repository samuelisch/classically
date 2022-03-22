import axios from "axios";

const clientEncoded = process.env.REACT_APP_CLIENT_ENCODED;
const tokenUrl = 'https://accounts.spotify.com/api/token'
// const searchUrl = 'https://api.spotify.com/v1/search'

const getToken = async () => {
  const response = await axios.post(tokenUrl, 'grant_type=client_credentials', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${clientEncoded}`
    },
  })
  return response.data

};

const spotifyCall = {
  getToken,
};

export default spotifyCall;
