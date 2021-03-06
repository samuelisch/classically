import axios from 'axios';

const clientEncoded = process.env.REACT_APP_CLIENT_ENCODED;

const tokenUrl = "https://accounts.spotify.com/api/token";
const searchUrl = "https://api.spotify.com/v1/search";

let token: string = "";

const getToken = async () => {
  const response = await axios.post(tokenUrl, "grant_type=client_credentials", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${clientEncoded}`,
    },
  });
  token = `Bearer ${response.data.access_token}`;
};

const searchTrack = async (name: string, term: string) => {
  const response = await axios.get(
    `${searchUrl}?q=${name}%2C${term}&type=artist%2Ctrack`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  return response.data;
};

const spotifyCall = {
  getToken,
  searchTrack,
};

export default spotifyCall;
