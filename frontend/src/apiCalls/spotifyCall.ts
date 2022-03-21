import axios from "axios";

const clientEncoded = process.env.REACT_APP_CLIENT_ENCODED;
const tokenUrl = 'https://accounts.spotify.com/api/token'
// const searchUrl = 'https://api.spotify.com/v1/search'

const login = async () => {
  const response = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${clientEncoded}`
    },
    body: 'grant_type=client_credentials'
  })
  const data = await response.json()
  return data

};

const spotifyCall = {
  login,
};

export default spotifyCall;
